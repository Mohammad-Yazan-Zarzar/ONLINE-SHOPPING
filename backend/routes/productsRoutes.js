// const { Modal } = require('@material-ui/core')
const express=require('express')
const router=express.Router()
const adminProtect=require('../middleware/adminMiddleware')
const multer  = require('multer')
const upload = multer({ dest: 'public/' })
const {uploadProductMiddleware}=require('../middleware/MulterProductMiddleware')
// const uploadMiddleware=require('../mid')

const { getProducts,setProduct,updateProduct,deleteProduct,getProductByName,getProductByClass }= require('../controllers/productsController')
// router.get('/',protect,getProducts)
router.get('/',getProducts)
router.get('/:productName',getProductByName)
router.get('/class/:productClass',getProductByClass)

// router.post('/',protect,setProduct)*
router.post('/',adminProtect,uploadProductMiddleware.single('productImg'),setProduct)

router.put('/:id',adminProtect,updateProduct)
router.delete('/:id',adminProtect,deleteProduct)

module.exports=router
