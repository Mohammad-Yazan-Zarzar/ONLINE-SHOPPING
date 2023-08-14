const { text } = require('express')
const Brands=require('../models/brandModel')
const Products=require('../models/productsModel')

const asyncHandler=require('express-async-handler')
const User=require('../models/userModel')
const uploadMiddleware=require('../middleware/MulterMiddleware')
const fs = require('fs')


const getBrands=asyncHandler(async(req,res)=>{
    const allBrands=await Brands.find().sort({createdAt:"descending"})
    // res.status(200).json({message:'Get all products'})
    res.status(200).json(allBrands)

})
const setBrand=asyncHandler(async(req,res)=>{
  
    // uploadMiddleware.single('BrandLogo')(req, res, function (error) {
    //     if (error) {
    //       console.log(`upload.single error: ${error}`);
    //       return res.sendStatus(500);
    //     }
    // })

    if(!req.body.brandName){
        console.log('Brand',req.body)
        res.status(400)
        throw new Error('Please add Brand name Field')
    }
    // console.log('body',req.file.)
    
    const brand =await Brands.create({
        brandName:req.body.brandName,
        brandLogo:req.file.filename,
        brandContacts:req.body.contactNumber,
        brandClass:req.body.brandClass
        

    })
    res.status(200).json(brand)

    // res.status(200).json({message:'Set product'})
})

const updateBrand=asyncHandler(async(req,res)=>{
    console.log('hhhhhhh',req.body.brandId)
    const brand=await Brands.findById(req.body.brandId)
    if(!brand){
        res.status(400)
        throw new Error('brand not found')
    }
    const updatedBrand=await Brands.findByIdAndUpdate(req.body.brandId,req.body,{new:true})
    console.log('updateBrand',updateBrand)
    res.status(200).json(updatedBrand)
    
    // res.status(200).json({message:`Update products ${req.params.id}`})
})
const deleteBrand=asyncHandler(async(req,res)=>{
    const Brand=await Brands.findById(req.params.id)
    if(!Brand){
        res.status(400)
        throw new Error('brand not found')
    }
   
    const deleteBrand=await Brands.findByIdAndRemove(req.params.id,req.body,{new:true})
    const deleteBrandProducts=await Products.deleteMany({brand:req.params.id},{new:true})
    console.log('products Breand',deleteBrandProducts)

    // ----------------
    // directory path
    const dir = `backend/public/${deleteBrand.brandName}`

    // delete directory recursively
    fs.rmdir(dir, { recursive: true }, err => {
    if (err) {
        throw err
    }

    console.log(`${dir} is deleted!`)
    })
    // ----------------
    res.status(200).json(deleteBrand)
    
    // res.status(200).json({message:`Update products ${req.params.id}`})
})
module.exports={
    getBrands,
    setBrand,
    updateBrand,
    deleteBrand
}
