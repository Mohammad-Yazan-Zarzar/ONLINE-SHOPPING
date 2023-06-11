const asyncHandler=require('express-async-handler')
const Orders=require('../models/ordersModel')
const Products=require('../models/productsModel')

const setOrder=asyncHandler(async(req,res)=>{
    if(!req.body.userId){
        res.status(400)
        throw new Error('Please Login first and try Again!!')
    }
 
    // console.log(req.body.brandName)

    const order =await Orders.create({
        user:req.body.userId,
        product:req.body.productId,

    })
    
    res.status(200).json(order)

})
const getOrderUser=asyncHandler(async(req,res)=>{
    var allOrders=[]
    const order=await Orders.find({user:req.body.userId})
    if(!order){
        res.status(400)
        throw new Error('Order not found')
    }

    // order.map(async(item) => {
            
    //     console.log('item',item.product)
    //     const orderProducts=await Products.find({_id:item.product})
    //     return orderProducts

    // }) 
    
    res.status(200).json(order)

})
const deleteOrder=asyncHandler(async(req,res)=>{
    const Order=await Orders.find({user:req.body.userId,product:req.body.product})
    if(!Order){
        res.status(400)
        throw new Error('Order not found')
    }
    
    const deletedOrder=await Orders.deleteOne({user:req.body.userId,product:req.body.productId},{new:true})
   
    res.status(200).json(deletedOrder)
    
    
})
module.exports={
    
    setOrder,
    getOrderUser,
    deleteOrder
  
}