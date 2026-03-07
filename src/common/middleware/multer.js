import multer from "multer";
import fs from "node:fs"
export const multer2=({ext="General",array=[]}={})=>{
 const fullpath=`upload/${ext}`
 if(!fs.existsSync(fullpath)){
  fs.mkdirSync(fullpath,{recursive:true})
 }
    const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, fullpath)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname + '-' + uniqueSuffix)//name of file
  }
})



function fileFilter (req, file, cb) {
if(!array.includes(file.mimetype)){
    cb(new Error('I don\'t have a clue!'))
}
else{


  cb(null, true)

}

}
const upload = multer({ storage: storage ,fileFilter})//function
return upload
}
export const deleteFile = (filePath)=>{
 if(fs.existsSync(filePath)){
   fs.unlinkSync(filePath)
 }
}