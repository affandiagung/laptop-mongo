const Joi = require("joi");
const catchHandler = require("../utils/catch-handler");
const {Laptop} = require('../models')

module.exports = {
  createLaptop : async (req,res) =>{
    const body = req.body
    const file = req.file
    
    try {
      const schema = Joi.object({  //schema mengisi validasi object sbb
        brandId :Joi.number().required(),
        name : Joi.string().required(),
        price : Joi.number().required(),
        image : Joi.string().required(),
        stock : Joi.number().required()
      })

      const {error} = schema.validate({
            ...body,
            image : file.path
          }) //menvaldiasi body dan file path
      if (error){
        return res.status(400).json({
          status : "Bad Request",
          message : error.message
        })
      }
      const laptop = await Laptop.create({
        ...body, //spread operator ( seluruh body yg ada masuk ke ...body)
        image : file.path //image diisi file.path
      })
      
      if (!laptop){
        return res.status(500).json({
          status : "internal server error", 
          message : "failed to created data laptop",
          result : {}
        })
      }
      return res.status(201).json({
        status : "Success",
        message : "Successfully created data laptop",
        result : laptop
      })
    } catch (error) {
      catchHandler (res,error)
    }
  }
}