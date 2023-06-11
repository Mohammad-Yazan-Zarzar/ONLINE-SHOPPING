const jwt=require('jsonwebtoken')
const asyncHandler=require('express-async-handler')
const Admin=require('../models/adminModel')
const adminProtect=asyncHandler(async(req,res,next)=>{
    let adminToken
    if(
        req.headers.authorization&&
        req.headers.authorization.startsWith('Bearer')
    ){
        try{
              // Get Token from Header
                adminToken=req.headers.authorization.split(' ')[1]
                // vertify Token
                const decode=jwt.verify(adminToken,process.env.JWT_SECRET)

                // Get User from the token
                req.admin=await Admin.findById(decode.id).select('-password')
                // console.log(req.admin)
                next()
            
        }catch(error){
            console.log(error)
            res.status(401)
            throw new Error('Not authorized')
        }
      
    }
    if(!adminToken){
        res.status(401)
        // console.log(req.headers.authorization)
        throw new Error('Not authorized,no token')
    }
})
module.exports=adminProtect