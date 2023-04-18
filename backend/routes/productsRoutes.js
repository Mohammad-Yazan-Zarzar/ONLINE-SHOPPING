// const { Modal } = require('@material-ui/core')
const express=require('express')
const router=express.Router()
const protect=require('../middleware/authMiddleware')

const { getProducts,setProduct,updateProduct,deleteProduct }= require('../controllers/productsController')
router.get('/',protect,getProducts)
router.post('/',protect,setProduct)
router.put('/:id',protect,updateProduct)
router.delete('/:id',protect,deleteProduct)

module.exports=router
