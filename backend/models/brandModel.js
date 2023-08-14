const mongoose=require('mongoose')
const brandSchema=mongoose.Schema({
    brandName:{
        type:String,
        required:[true,'please add a brandName']
    },
    brandLogo:{
        type:String,
        required:[false],
        // unique:true
    },
    brandClass:{
        type:String,
        required:[true,'please add a class of brand'],
        // unique:true
    },
    brandContacts:{
        type:Number,
        required:[false],
        // unique:true
    }
},{timestamps:true})
module.exports=mongoose.model('Brand',brandSchema)