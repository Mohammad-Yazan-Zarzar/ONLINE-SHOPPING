const mongoose= require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        // console.log(conn.Connection.host.cyan.underline)

    }catch(error){
        console.log(error);
        process.exit(1);

    }
}
module.exports=connectDB;