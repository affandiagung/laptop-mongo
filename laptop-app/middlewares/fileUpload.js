const multer = require('multer')
const catchHandler = require('../utils/catch-handler')
const path = require ('path') //library bawaan express untuk mendapatkan nama
module.exports ={
  uploadLocal : (fieldname) =>{
    //membuat atau setting storage dengan multer.diskStorage
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public') //destinasi simpan file
        },
        filename: function (req, file, cb) {
          const uniqueSuffix = Date.now()
          cb(null, uniqueSuffix+"-"+file.originalname) //seting nama file
        }
      })
      const upload = multer({storage }).single(fieldname) // setting upload, mengupload single atau array ( didokmentasi multer npm)
      return ( req,res,next)=>{
        upload(req,res,(err)=>{ //middleware ,3 argument, reg res, err
          if( err){ //callback function
            return catchHandler (res,err)
          }
          return next() //jika tidak error langsung next
        });
      };
    },
};