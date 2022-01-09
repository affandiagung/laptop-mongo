const express = require ('express')
const Joi = require('joi') //untuk validasi data
const {Brand} = require ('../models')
const catchHandler = require ('../utils/catch-handler')
module.exports = {
  createBrand : async (req,res) => {
    const body = req.body
    try {
      const schema = Joi.object({
        name : Joi.string().required(), // mengecheck nama dari name string tidak boleh kosong
        tahun : Joi.number().required(),
        city : Joi.string().required()
      })
      const {error} = schema.validate(body) // yg akan divalidate adalah data dari req body ( dari user)
      if (error){
        return res.status(400).json({
          status : "bad requist",
          message : error.message
        })
      }
      const brand = await Brand.create(body) //method sequelize untuk membuat data ke database
      if (!brand){
        return res.status(500).json({
          status : "Internal Server Error",
          message : "Failed to save the data to database"
        })
      }
      res.status(201).json({
        status : "Success",
        message : "Berhasil membuat data",
        result : brand
      })
    } catch (error) {
     catchHandler(res,error)
    }
  },
  getBrands : async (req,res) =>{
    try {
      const brands = await Brand.findAll({
        limit : 10,
         order : [
           ["createdAt", "DESC"]
         ]
      });
      
      if(brands.length == 0){
        return res.status(404).json({ 
          status : "Data not found",
          message : "The data is empty",
          result : []
        })
      }

      return res.status(200).json({
        status :  "Success",
        message : "successfully retrieve the data",
        result : brands
      })
    } catch(error){
      catchHandler(res,error)
    }
  }, 
  getBrand : async (req,res) =>{
    const {brandId : id} = req.params
    try {
       
      const brand = await Brand.findOne({
        where : {
          id ,
        }
      });   
      if(!brand) {
        res.status(404).json({
          status : "Data Not Found",
          message : "Cannot find a brand with id " + id,
          result : []
        })
      }
      return res.status(200).json({
        status :  "Success",
        message : "successfully retrieve the data",
        result : brand
      })
    } catch(error){
      catchHandler(res,error)
    }
     },
  updatedBrand : async (req,res)=>{
    const {brandId} = req.params
    const body =req.body
    try {
      const schema = Joi.object({
        name : Joi.string(),
        tahun : Joi.number(),
        city : Joi.string()
      })
      const {error} = schema.validate(body)
      if(error){
        res.status(400).json({
          status : "bad request",
          message : error.message,
          result : {}
        })
      }
      const checkUpdate = await Brand.update(body, {
        where : {
          id : brandId
        }
      })

      if(checkUpdate[0] !=1){
        return res.status(500).json({
          status :" Internal Server Error",
          message : "Data not found",
          result : {}
        })
      }
      const brand = await Brand.findByPk(brandId)

      res.status(200).json({
        status : "Success",
        message : "Successfully updated the data",
        result  :checkUpdate
      })
    } catch (error){
      catchHandler(res,error)
    }
     
  },
  deleteBrand : async(req,res)=>{ 
      const {brandId} = req.params
      try {
          const brand = await Brand.destroy({
            where : {
              id : brandId,
            }
          })
         if (!brand){
           return res.status(404).json({
             status : "data NOt found",
             message : "data yg ingin dihapus tidak ada",
             result : {}
           })
         }
         res.status(200).json({
           status : "success",
           message : "Successfully delete the data where id " + brandId,
           result : {}
         })
      }catch(error){
          catchHandler(res,error)
      }
  }
};