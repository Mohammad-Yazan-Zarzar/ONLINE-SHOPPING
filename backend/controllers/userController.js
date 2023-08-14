const jwt=require('jsonwebtoken')
const bcrybt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const { use } = require('../routes/productsRoutes')

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d'
    })
}

const registerUser=asyncHandler(async(req,res)=>{
    const{name,email,password}=req.body
    if(!name || !email || !password){
        res.status(400).json({error:'please add all fields'})
        throw new Error('please add all fields')

    }
    // check if user Exists
    const userExists=await User.findOne({email})
    if(userExists){
        res.status(404).send('User Alredy Exist')
        throw new Error('User Already Exists')

    }
    // Hash Password
    const salt=await bcrybt.genSalt(10)
    const hashedPassword=await bcrybt.hash(password,salt)

    //Create User
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    if(user){
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid user data')

    }
})
const loginUser=asyncHandler(async(req,res)=>{
    const{email,password}=req.body
    // check for user
    
    
    const user=await User.findOne({email})
    // res.status(200).json({email:user.email,name:user.name})

    if(user &&(await bcrybt.compare(password,user.password))){

        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalid credentials')

    }
})
const getMe=asyncHandler(async(req,res)=>{
    res.status(200).json(req.user)
})
const orderUser=asyncHandler(async(req,res)=>{
    const order=await User.findById(req.body.userID)

    // console.log(req.body)
    if(!order){
        res.status(400)
        throw new Error('order not found')
    }
    order.orders.push({'ProductId':req.body.productID})
    console.log(order.orders)
    res.status(200).json(req.user.order)
})
module.exports={
    registerUser,
    loginUser,
    getMe,
    orderUser
}
