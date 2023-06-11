// const { Modal } = require('@material-ui/core')
const express=require('express')
const router=express.Router()
const adminProtect=require('../middleware/adminMiddleware')
const {uploadMiddleware}=require('../middleware/MulterMiddleware')
const { getBrands,setBrand,updateBrand,deleteBrand }= require('../controllers/brandsController')
const multer  = require('multer')

// const upload = multer({ dest: 'public/' })

router.get('/',getBrands)
// router.post('/',uploadMiddleware.single('brandLogo'),setBrand)
router.post('/',adminProtect,uploadMiddleware.single('BrandLogo'),setBrand)
// router.post('/',upload.single('brandLogo'),setBrand)

// router.post('/',async(req,file,res)=>{
//     console.log(req.body)
//     const logo=req.file
    
//     console.log(logo);
// })
router.put('/:id',adminProtect,updateBrand)
router.delete('/:id',adminProtect,deleteBrand)

module.exports=router
