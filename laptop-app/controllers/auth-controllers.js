const Joi = require('joi')
const jwt = require('jsonwebtoken')
const {Users} = require('../models')
const bcrypt = require('bcrypt')
const catchHandler = require('../utils/catch-handler')

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
              status : "Bad Request",
              message : error.message,
              result : {}
            })
          }
          const check = await Users.findOne({
            where : {
              email : body.email
            }
          })
          if (check){
            res.status(400).json({
              status : "bad request",
              message : "email already exist, please sign up with different email",
              result : {}
            })
          }

          const hashedPassword = await bcrypt.hash(body.password,11) //argument ke2 adalah note round bcrypt
          const user = await Users.create({
            name : body.name,
            email : body.email,
            password : hashedPassword
          })
          
          const token = jwt.sign({
            id : user.id,
            email : user.email
          },process.env.SECRET_TOKEN, {expiresIn : 60*60*12});

          res.status(200).json({
            status :"Success",
            message : "Successfully save the data",
            result : token
          })
      } catch (error) {
        catchHandler (res,error)
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
            status : "Bad Request",
            message : error.message
          })
        }
        const user = await Users.findOne({ where :{ email }}) //mengambil data dari data base
        
        if(!user){
          return res.status(201).json({
            status :"Unauthorized",
            message : "Invalid email or password",
            result : {}
          })
        }
        const isValid = await bcrypt.compare(password, user.password)
        if (!isValid){
          return res.status(201).json({
            status :"Unauthorized",
            message : "Invalid email or password",
            result : {}
          })
        }
        
        const token = jwt.sign({
          email : user.email,
          id : user.id
        },process.env.SECRET_TOKEN, {expiresIn : 60*60*12});

        res.status(200).json({
          status : "Success",
          message : "Successfully login",
          result : {token}
        })
      } catch (error) {
        catchHandler (res,error)
      }
    }
}