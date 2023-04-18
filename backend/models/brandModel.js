const mongoose=require('mongoose')
const brandSchema=mongoose.Schema({
    brandName:{
        type:String,
        required:[true,'please add a brandName']
    },
    brandLogo:{
        type:String,
        required:[true,'please add a logo'],
        // unique:true
    },
    brandContacts:{
        type:Number,
        required:[true,'please add a Number'],
        // unique:true
    }
},{timestamps:true})
module.exports=mongoose.model('Brand',brandSchema)