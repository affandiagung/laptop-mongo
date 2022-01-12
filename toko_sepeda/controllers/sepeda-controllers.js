
const Joi =require('joi') //untuk validasi data
const {Sepeda} = require('../models') //mengambil model 

module.exports = {
  createSepeda :async (req,res)=>{
    const body = req.body
    const file = req.file
   
    try {
      const schema = Joi.object({  //schema mengisi validasi object sbb
        vendorId :Joi.number().required(),
        name : Joi.string().required(),
        harga : Joi.number().required(),
        gambar : Joi.string().required(),
        stock : Joi.number().required()
      })

      const {error} = schema.validate({
            ...body,
            gambar : file.path
          }) //menvaldiasi body dan file path
      if (error){
        return res.status(400).json({
          status : "Check inputan data",
          message : error.message
        })
      }
      const sepeda = await Sepeda.create({
        ...body, //spread operator ( seluruh body yg ada masuk ke ...body)
        gambar : file.path //image diisi file.path
      })
      
      if (!sepeda){
        return res.status(500).json({
          status : "Error pada saat create data ke laptop", 
          message : "failed to created data laptop",
          result : {}
        })
      }
      return res.status(201).json({
        status : "Success",
        message : "Successfully created data laptop",
        result : sepeda
      })
    } catch (error) {
      return res.status(500).json({
        status : "Internal server error pada saat mengambil data sepeda",
        message : error.message,
        result : {}
      })
    }
  },
  getSepeda :async (req,res)=>{
    try {
     const sepedas = await Sepeda.findAll ({
        order : [["createdAt",'DESC']],
     })
      
     if(sepedas.length ==0){
       return res.status(404).json({
         status : "Tidak ada data yg bisa ditampilkan",
         message : "Data kosong, tidak ada data sepeda yg bisa ditampilkan"
       })
     }
     return res.status(200).json({
       status : "Success",
       message : "Berhasil mengambil data vendor dari database",
       result : sepedas
     })
    } catch (error) {
      res.status(500).json({
        status : "Koneksi gagal",
        message : error.message,
        result :{}
      })
    }
  }  
}