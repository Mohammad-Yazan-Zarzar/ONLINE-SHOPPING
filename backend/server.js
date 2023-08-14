const express=require('express')
require('path')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT||5000
const connectDB=require('./config/db')
const cors = require('cors')
const bodyParser=require('body-parser')
const path = require('path')
connectDB()
const app=express()
app.use(express.json())
app.use(cors())
// app.use(express.static("backend/public"))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.urlencoded({extended:false}))
app.use(errorHandler)

app.use('/api/products',require('./routes/productsRoutes'))
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/admin',require('./routes/adminRoutes'))
app.use('/api/orders',require('./routes/orderRoutes'))


app.use('/api/brands',require('./routes/brandRoutes'))
// ////tryed
app.use(`/public`,express.static(`backend/public`))

// /////////////////////////
if(process.env.NODE_ENV==='production'){
    app.use(express.static(path.join(__dirname,'../frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'../','frontend','build','index.html'))
    })
}else{
    app.get('/',(req,res)=>res.send('please run build'))
}

// ///////////

app.listen(port,()=>{
    console.log(`server run on ${port}`)
})