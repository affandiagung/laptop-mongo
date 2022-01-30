const multer = require('multer')
const {CloudinaryStorage} = require('multer-storage-cloudinary')
const catchHandler = require('../utils/catch-handler')
const cloudinary = require('../config/cloudinary')

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
  uploadCloud : (fieldName) =>{
      //membuat atau setting storage dengan multer.diskStorage
      const storage = new CloudinaryStorage({
        cloudinary : cloudinary, //cloud yg sudah di buat di config
        params : (req,file) =>{ //params isinya sebuah function yg mereturn sebuah object
          return  {
            folder : fieldName, //nama folder tergantung fieldName yg dibuat
            resource_type  : "raw",
            public_id : Date.now()+"-"+file.originalname, //nama file
          }
        }        
        })
  
        
        const upload = multer({storage }).single(fieldName) // setting upload, mengupload single atau array ( didokmentasi multer npm)
       
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