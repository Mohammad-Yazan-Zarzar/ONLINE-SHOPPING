const express=require('express')
const router=express.Router()
const{registerAdmin,loginAdmin}=require('../controllers/adminController')
const adminProtect=require('../middleware/adminMiddleware')
router.post('/',registerAdmin)
router.post('/login',loginAdmin)
// router.post('/me',protect,getMe)

module.exports=router
