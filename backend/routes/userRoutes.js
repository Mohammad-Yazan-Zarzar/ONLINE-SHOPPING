const express=require('express')
const router=express.Router()
const{registerUser,loginUser,getMe,orderUser}=require('../controllers/userController')
const protect=require('../middleware/authMiddleware')
router.post('/',registerUser)
router.post('/login',loginUser)
router.post('/me',protect,getMe)
router.post('/orders',protect,orderUser)


module.exports=router
