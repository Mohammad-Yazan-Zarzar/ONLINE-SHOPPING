const express=require('express')
const router=express.Router()
const { setOrder,getOrderUser,deleteOrder}= require('../controllers/orderController')
const protect=require('../middleware/authMiddleware')
// router.post('/',registerUser)
// router.post('/login',loginUser)
router.post('/addOrder',protect,setOrder)
router.post('/getOrder',protect,getOrderUser)
router.post('/deleteOrder',protect,deleteOrder)


// router.post('/orders',protect,orderUser)

module.exports=router
