const express= require('express')
const router = express.Router()
const axios = require('axios')
const {hello,sayHI} = require('../tmp/hello')


router.get("/fecthing/api",(req,res)=>{
  sayHI() //setelah import file hello.js di tmp/hello dibaris 4
  return  axios
  .get("https://61d65cc5b738160017181510.mockapi.io/api/v1/Sepeda")
  .then((isi)=>res.send(isi.data))
  .catch((err)=>console.log(err))
})

module.exports = router