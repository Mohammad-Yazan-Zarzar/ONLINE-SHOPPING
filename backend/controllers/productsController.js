const { text } = require('express')
const Products=require('../models/productsModel')
const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const fs = require('fs')

const getProducts=asyncHandler(async(req,res)=>{
    // const allProducts=await Products.find({user:req.user.id})
    const allProducts=await Products.find().sort({createdAt:"descending"})

    // res.status(200).json({message:'Get all products'})
    res.status(200).json(allProducts)

})
const setProduct=asyncHandler(async(req,res)=>{
    if(!req.body.productName){
        res.status(400)
        throw new Error('Please add product Name')
    }
    // if(!req.file){
    //     res.status(400)
    //     throw new Error('Please add product Image')
    // }
    // console.log(req.file.filename)
    console.log(req.body.brandName)

    const product =await Products.create({
        productName:req.body.productName,
        productClass:req.body.productClass,
        // user:req.user.id
        brand:req.body.brandId,
        productImage:req.file.filename,
        price:req.body.price,
        brandName:req.body.brandName,
        productDescription:req.body.productDescription,


           
    })
    
    res.status(200).json(product)

    // res.status(200).json({message:'Set product'})
})

const updateProduct=asyncHandler(async(req,res)=>{
    const product=await Products.findById(req.body.productId)
    // console.log(req.body)
    if(!product){
        res.status(400)
        throw new Error('product not found')
    }
    // const user=await User.findById(req.user.id)
    // // check user
    // if(!user){
    //     res.status(400)
    //     throw new Error('User not found')

    // }
    // if(product.user.toString()!==user.id){
    //     res.status(400)
    //     throw new Error('User not fauthorize')

    // }
    const updatedProduct=await Products.findByIdAndUpdate(req.body.productId,req.body,{new:true})
    // updateProduct.productName=req.body.productName
    // updateProduct.productClass=req.body.productClass
    // updateProduct.price=req.body.price
    // updateProduct.brandName=req.body.brandName
    // updateProduct.brandId=req.body.brandId
    console.log('update done',updatedProduct)

    
    
    res.status(200).json(updatedProduct)
    
    // res.status(200).json({message:`Update products ${req.params.id}`})
})
const deleteProduct=asyncHandler(async(req,res)=>{
    const Product=await Products.findById(req.params.id)
    if(!Product){
        res.status(400)
        throw new Error('Product not found')
    }
    // const user=await User.findById(req.user.id)
    // // check user
    // if(!user){
    //     res.status(400)
    //     throw new Error('User not found')

    // }
    // if(product.user.toString()!==user.id){
    //     res.status(400)
    //     throw new Error('User not fauthorize')

    // }
    const deletedProduct=await Products.findByIdAndRemove(req.params.id,req.body,{new:true})
    // ----------------
    // directory path
    if(deletedProduct.productImage!='' && deleteProduct.productImage!=null&&deletedProduct.brandName!=undefined ){
        const dir = `backend/public/${deletedProduct.brandName}/${deletedProduct.productImage}`
        
        // delete directory recursively
        fs.unlink(dir, err=> {            
            if (err) {                                                 
                throw err                                    
            }                                                          
       console.log(`${dir}File has been Deleted`);                           
    });         

    }

    
    
    // ----------------
    res.status(200).json(deletedProduct)
    
    // res.status(200).json({message:`Update products ${req.params.id}`})
})
const getProductByName=asyncHandler(async(req,res)=>{
    // const product=await Products.find({productName:req.params.productName})
    const product=await Products.find({productName:req.params.productName})
    const filterProduct=product.filter(item=>item.productName.includes(req.params.productName))
    if(!filterProduct){
        res.status(400)
        throw new Error('Product not found')
    }
    res.status(200).json(filterProduct)

})
const getProductByClass=asyncHandler(async(req,res)=>{
    const product=await Products.find({productClass:req.params.productClass})
    if(!product){
        res.status(400)
        throw new Error('Product not found')
    }
    res.status(200).json(product)

})
module.exports={
    getProducts,
    setProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getProductByClass
}
