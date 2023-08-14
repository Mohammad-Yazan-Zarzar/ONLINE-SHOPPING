const jwt=require('jsonwebtoken')
const bcrybt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const Admin=require('../models/adminModel')
const { use } = require('../routes/productsRoutes')

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

const registerAdmin=asyncHandler(async(req,res)=>{
    const{adminName,adminEmail,adminPassword}=req.body
    if(!adminName || !adminEmail || !adminPassword){
        res.status(400)
        throw new Error('please add all fields')

    }
    // check if user Exists
    const adminExists=await Admin.findOne({adminEmail})
    if(adminExists){
        res.status(400)
        throw new Error('Admin Account Already Exists')

    }
    // Hash Password
    const salt=await bcrybt.genSalt(10)
    const hashedPassword=await bcrybt.hash(adminPassword,salt)

    //Create User
    const admin=await Admin.create({
        adminName,
        adminEmail,
        adminPassword:hashedPassword
    })
    if(admin){
        res.status(201).json({
            _id:admin.id,
            adminName:admin.adminName,
            adminEmail:admin.adminEmail,
            adminToken:generateToken(admin._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid admin data')

    }
})
const loginAdmin=asyncHandler(async(req,res)=>{
    const{adminEmail,adminPassword}=req.body
    // check for user
    
    const admin=await Admin.findOne({adminEmail})
    // res.status(200).json({email:user.email,name:user.name})
    console.log(adminEmail)

    if(admin &&(await bcrybt.compare(adminPassword,admin.adminPassword))){

        res.status(201).json({
            _id:admin.id,
            adminName:admin.adminName,
            adminEmail:admin.adminEmail,
            adminToken:generateToken(admin._id)
        })
    }else{
        console.log(admin)
        res.status(400)
        throw new Error('Invalid credentials')

    }
})
// const getMe=asyncHandler(async(req,res)=>{
//     res.status(200).json(req.user)
// })
module.exports={
    registerAdmin,
    loginAdmin,
    // getMe
}
