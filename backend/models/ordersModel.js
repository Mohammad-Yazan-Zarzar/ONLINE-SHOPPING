const mongoose=require('mongoose')
const orderSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Products'
    }
},{timestamps:true})
module.exports=mongoose.model('Orders',orderSchema)
