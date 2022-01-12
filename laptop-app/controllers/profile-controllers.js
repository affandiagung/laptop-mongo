const Joi = require('joi').extend(require('@joi/date'))
const {Profile,Users} =require('../models')
const catchHandler = require('../utils/catch-handler')

module.exports = {
  createProfile : async (req,res)=>{
    const body = req.body
    const user = req.user
    try {
      const schema = Joi.object({
        name : Joi.string().required(),
        phone : Joi.string(),
        dateOfBirth : Joi.date().format("YYYY-MM-DD"),
        address : Joi.string()
      }) 
      const {error} = schema.validate(body)
      if (error){
        return res.status(400).json({
          status : "Bad Request",
          message : error.message
        })
      }
      const check = await Profile.findOne({
        where : {
          userID : user.id
        }
      })
      if (check){
        return res.status(400).json({
          status :"gagal",
          message : "udah punya profile",
          result : {}
        })
      }
      const profile = await Profile.create({
        ...body,
        userId : user.id
      })

      res.status (200).json({
        status : "success",
        message : "Successfully create a profile",
        status : profile
      })
    } catch (error) {
      catchHandler(res,error)
    }
  },
  getProfile : async (req,res)=>{
    const user = req.user
    try {
      const profile = await Profile.findOne({
        where :{
          userId : user.id
        },
        include :[
          {
            model :Users,
            as : "user"
          }
        ]
      })
      if(!profile){
        return res.status(404).json({
          status : "Gagal",
          message : "Data Gagal di cari didatabase"
        })
      }
      res.status(200).json({
        status : "berhasil",
        message : "Sukses menambil data dari database dengan userId " + user.id,
        result : profile
      })
    } catch (error) {
      catchHandler (res,error)
    }
  }
}