const mongoose = require('mongoose')
const productsSchema=mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    productName:{
        type:String,
        required:[true,'please add a text value']
    }},
    {
        timestamps:true,
    }
)
module.exports=mongoose.model('Products',productsSchema)