const Joi = require('joi')
const jwt = require ('jsonwebtoken')

const {Admins} = require('../models')
const bcrypt = require('bcrypt')


module.exports = {
    register :  async (req,res) => {
      const body =req.body //mengambil data2 body
      try {
          const schema = Joi.object({  //validasi data yg dikirim dari body
            email : Joi.string().email().required(), //validasi berdasarkan email
            name : Joi.string().required(),
            password : Joi.string().min(6).required()
          })
          const {error} = schema.validate(body) //jika validasi gagal, error ada nilainya
          if (error){
            return res.status(400).json({
              status : "Data yang diinput tidak sesuai",
              message : error.message,
              result : {}
            })
          }

          const check = await Admins.findOne({
            where : {
              email : body.email
            }
          })
          if (check){
           return  res.status(400).json({
              status : "bad request",
              message : "email already exist, please sign up with different email",
              result : {}
            })
          }
          const hashedPassword = await bcrypt.hash(body.password,11) //argument ke2 adalah note round bcrypt
           const admin = await Admins.create({
            name : body.name,
            email : body.email,
            password : hashedPassword
          })
          const token = jwt.sign({
            id : admin.id,
            email : admin.email
          },process.env.PENANDA, {expiresIn : 60*60*12});
                 
          return res.status(200).json({
            status :"Success",
            message : "Successfully save the data",
            result : token
          })
      } catch (error) {
        return res.status(500).json({
          status : "Internal server error pada saat register ",
          message : error.message,
          result:{}
        })
      }
    },
    login : async (req,res)=>{
      const {email, password} = req.body
      try {
        const schema = Joi.object({ //validasi data yg dikirim
          email : Joi.string().required(),
          password : Joi.string().min(6).required()
        })

        const {error} = schema.validate({...req.body})
        if (error){
          res.status(400).json({
            status : "Data yang diinput tidak sesuai",
            message : error.message
          })
        }
           
        const admin = await Admins.findOne({ where :{ email }}) //mengambil data dari data base
      
        if(!admin){
          return res.status(201).json({
            status :"Tidak boleh login",
            message : "Email tidak terdaftar",
            result : {}
          })
        }
        const isValid = await bcrypt.compare(password, admin.password)
      
        if (!isValid){
          return res.status(201).json({
            status :"Tidak boleh login",
            message : "Password salah",
            result : {}
          })
        }
        const token = jwt.sign({
          email : admin.email,
          id : admin.id
        },process.env.PENANDA, {expiresIn : 600*60*12});

        res.status(200).json({
          status : "Success",
          message : "Successfully login",
          result : {token}
        })
      } catch (error) {
       return res.status(500).json({
         status : "Internal Server Error pada saat login",
         message : error.message,
         reuslt:{}
       })
      }
    }
}