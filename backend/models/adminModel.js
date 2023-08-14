const mongoose=require('mongoose')
const adminSchema=mongoose.Schema({
    adminName:{
        type:String,
        required:[true,'please add an Admin name']
    },
    adminEmail:{
        type:String,
        required:[true,'please add an Admin email'],
        unique:true
    },
    adminPassword:{
        type:String,
        required:[true,'please add an Admin password'],
        unique:true
    }
},{timestamps:true})
module.exports=mongoose.model('Admin',adminSchema)