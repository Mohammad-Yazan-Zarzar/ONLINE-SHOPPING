const mongoose = require('mongoose')
const productsSchema=mongoose.Schema({
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Brand'
    },
    productName:{
        type:String,
        required:[true,'please add a text value']
    },
    brandName:{
        type:String,
        required:[true,'please add a brand value']
    },
    productClass:{
        type:String,
        required:[true,'please add a product class']
    },
    productImage:{
        type:String,
        required:[true,'please add an image  value']

    },
    price:{
        type:Number,
        required:[true,'please add a price  value']

    },
    priceDown:{
        type:Number,
        required:[false]
    },
    lovers:{
        type:Number,
        require:false
    },
    productDescription:{
        type:String,
        required:[true,'please add a description for product']
    }
    },
    {
        timestamps:true,
    }
)
module.exports=mongoose.model('Products',productsSchema)