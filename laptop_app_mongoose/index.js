const express = require ( 'express')
const res = require('express/lib/response')
const app = express()
const port = 5000
const connect = require('./config/connect_mongoDB')
const Brand = require('./models/brand')
const dotenv = require('dotenv')
dotenv.config()
connect()

app.use(express.json()) //untuk mengakses req.body (json)


app.post("/brand", async (req,res)=>{
const {body} = req

  try {

  const brand = await Brand.create(body)
  if (!brand) {
    return  res.status(200).json(brand)
  }
  res.status(201).json(brand)
  }
 catch (error) {
  res.status(500).json({
    status : "Internal Server Error",
    message : error.message
  })
}
})


app.listen(port,()=>console.log("Aplikasi ini jalan di port ",port,"untuk koneksi express ke mongo DB"))