const Joi = require("joi");
const catchHandler = require("../utils/catch-handler");
const {Laptop,Brand} = require('../models');
const brand = require("../models/brand");

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
          status : "Check inputan data",
          message : error.message
        })
      }
      const laptop = await Laptop.create({
        ...body, //spread operator ( seluruh body yg ada masuk ke ...body)
        image : file.path //image diisi file.path
      })
      
      if (!laptop){
        return res.status(500).json({
          status : "Error pada saat create data ke laptop", 
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
  },
  getLaptop : async (req,res)=>{
    
    try {
      const laptops = await Laptop.findAll({
        limit :10,
        include : [
          {
            model : Brand,
            as : "brand",
            attributes : {
              exclude : ["id","createdAt","updatedAt"]  
            }
          }
        ],
        attributes : {
          exclude : ["brandId","id","createdAt","updatedAt"]  
        }
      })  
     
      if (laptops.length==0){
        res.status(404).json({
          status : "Data Kosong",
          message : "Database is empty, data not found",
          result : {}
        })
      }
        res.status(200).json({
          status : "success",
          message : "Berhasil membaca data laptops",
          result : laptops
        })
      
    } catch (error) {
      catchHandler(res,error)
    }
  }
}