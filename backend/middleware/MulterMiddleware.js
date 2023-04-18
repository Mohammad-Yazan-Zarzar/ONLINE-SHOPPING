const multer=require('multer')
const { v4:uuidv4 }=require('uuid')
const path=require('path')
const asyncHandler=require('express-async-handler')
const fs = require("fs");

// const { log } = require('console')

const storage=multer.diskStorage({
    destination:asyncHandler(async(req,file,cb)=>{
        const balayAudPath = `public/${req.body.brandName}`

        fs.mkdirSync(balayAudPath, { recursive: true })
        // cb(null,"public/")
        cb(null,balayAudPath)

    }),
    filename:asyncHandler( async(req,file,cb)=>{
        cb(null,`${uuidv4()}_${path.extname(file.originalname)}`)
        console.log('original-name',file.originalname);
    }),
    // filename: function (req, file, cb) {
    //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //     cb(null, file.fieldname + '-' + uniqueSuffix)
    //   }
})
const fileFilter=(req,file,cb)=>{
    const allowedFileTypes=["image/jpeg","image/jpg","image/png"]
    if(allowedFileTypes.includes(file.mimeType)){
        cb(null,true)
    }else{
        cb(null,false)
    }
}
const uploadMiddleware=multer({storage})
console.log('done')
module.exports=uploadMiddleware