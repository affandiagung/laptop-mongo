const express = require('express')
require('dotenv').config()
const app = express()
const port = 8000
const connect = require('./config')
const Brand = require('./models/brand')

connect()

app.use(express.json())
app.post("/brand", async(req,res)=>{
  const {body} = req
 try {
   const brand = await Brand.create(body)
   res.status(201).json(brand)
 } catch (error) {
   res.status(500).json({
     error  :error.message
   })
 }
})


app.listen(port,()=> {
  console.log("App jalan di port",port)
})