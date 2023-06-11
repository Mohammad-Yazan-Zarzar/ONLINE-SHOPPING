const multer=require('multer')
const { v4:uuidv4 }=require('uuid')
const path=require('path')
const asyncHandler=require('express-async-handler')
const fs = require("fs");
// const { log } = require('console');
const storage=multer.diskStorage({
    destination:asyncHandler(async(req,file,cb)=>{
        const balayAudPath2 = `backend/public/${req.body.brandName}`
        console.log('path',balayAudPath2)
        console.log('path',req.body)

        // fs.mkdirSync(balayAudPath,{ recursive: true })
        // cb(null,"public/")
        cb(null,balayAudPath2)

    }),
    filename:asyncHandler( async(req,file,cb)=>{
        cb(null,`${uuidv4()}_${path.extname(file.originalname)}`)
        console.log('original-name',file.originalname);
    }),
    
})
console.log('product Done')
const uploadProductMiddleware=multer({storage})

module.exports={uploadProductMiddleware}