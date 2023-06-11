const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'please add a name']
    },
    email:{
        type:String,
        required:[true,'please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'please add an email'],
        unique:true
    },
    orders:[
        {
            'productId':String
        }
    ]
    // orders:[{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'Products'
    // }],
},{timestamps:true})
module.exports=mongoose.model('User',userSchema)