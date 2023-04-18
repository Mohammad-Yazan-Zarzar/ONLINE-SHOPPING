const { text } = require('express')
const Products=require('../models/productsModel')
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')

const getProducts=asyncHandler(async(req,res)=>{
    const allProducts=await Products.find({user:req.user.id})
    // res.status(200).json({message:'Get all products'})
    res.status(200).json(allProducts)

})
const setProduct=asyncHandler(async(req,res)=>{
    if(!req.body.productName){
        res.status(400)
        throw new Error('Please add Text Field')
    }
    const product =await Products.create({
        productName:req.body.productName,
        user:req.user.id

    })
    res.status(200).json(product)

    // res.status(200).json({message:'Set product'})
})

const updateProduct=asyncHandler(async(req,res)=>{
    const product=await Products.findById(req.params.id)
    if(!product){
        res.status(400)
        throw new Error('product not found')
    }
    const user=await User.findById(req.user.id)
    // check user
    if(!user){
        res.status(400)
        throw new Error('User not found')

    }
    if(product.user.toString()!==user.id){
        res.status(400)
        throw new Error('User not fauthorize')

    }
    const updatedProduct=await Products.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedProduct)
    
    // res.status(200).json({message:`Update products ${req.params.id}`})
})
const deleteProduct=asyncHandler(async(req,res)=>{
    const product=await Products.findById(req.params.id)
    if(!product){
        res.status(400)
        throw new Error('product not found')
    }
    const user=await User.findById(req.user.id)
    // check user
    if(!user){
        res.status(400)
        throw new Error('User not found')

    }
    if(product.user.toString()!==user.id){
        res.status(400)
        throw new Error('User not fauthorize')

    }
    const deletedProduct=await Products.findByIdAndRemove(req.params.id,req.body,{new:true})
    res.status(200).json(deletedProduct)
    
    // res.status(200).json({message:`Update products ${req.params.id}`})
})
module.exports={
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct
}
