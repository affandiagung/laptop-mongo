const req = require("express/lib/request")
const catchHandler = require("../utils/catch-handler")
const {Users} = require ("../models")
const jwt = require("jsonwebtoken")

module.exports ={
  isLogin : async (req,res,next) => { //next = callback, poindah ke selanjutnya
    try {
      let token = req.header("Authorization") //mengambil token dari user authorization
      if(!token){  //check token ada atau tidak
        return res.status(401).json({
          status : "Unauthorized",
          message : "No token detected",
          result : {}
        })
      }  
      
      token = token.replace("Bearer ","") //mengahopuos tulisan bearer
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN)  //mendekripsi token, ( mengambil value email dan passowrd)
      const user = await Users.findByPk(decoded.id) //mencari di table user berdasarkan token ( decoded.id)
      if(!user){
        return res.status(401).json({
          status : "Unauthorized",
          message : "User not found",
          result : {}
        })
      }
      //mengirimkan data user ke kontroller selanjutnya
      req.user = {
        id : user.id,
        email : user.email,
        isAdmin : user.isAdmin
      }
      next() //pindah ke kontroller selanjutnya
    } catch (error) {
      return res.status(401).json({
        status : "Unauthorazied ini",
        message : error.message,
        result : {}
      })
    }
  },
  isAdmin : async (req,res,next)=>{ //
    try {
      let token = req.header("Authorization") //mengambil token dari user authorization
      if(!token){  //check token ada atau tidak
        return res.status(401).json({
          status : "Unauthorized",
          message : "No token detected",
          result : {}
        })
      } 
      token = token.replace("Bearer ","") //mengahopuos tulisan bearer
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN)  //mendekripsi token, ( mengambil value email dan passowrd)
      const user = await Users.findByPk(decoded.id) //mengamnbil database user berdasarkan token ( decoded.id)
      if(!user){
        return res.status(401).json({
          status : "Unauthorized",
          message : "User not found",
          result : {}
        })
      }
      if(!user.isAdmin){ //mengecheck apakah bukan admin
        return res.status(401).json({
          status : "Tidak memiliki akses",
          message : "Kamu bukan admin, tidak bisa mengakses halaman",
          result : {}
        })
      }
      //mengirimkan data user ke kontroller selanjutnya
      req.user = {
        id : user.id,
        email : user.email,
        isAdmin : user.isAdmin
      }
     
      next() //pindah ke kontroller selanjutnya
    } catch (error) {
      return res.status(401).json({
        status : "Unauthorazied ini",
        message : error.message,
        result : {}
      })
    }
  }
}