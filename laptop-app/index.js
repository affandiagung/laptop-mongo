require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000
const route = require('./routes')

app.use(express.json()) //agar dapat membaca body yg dikirimkan oleh user( body parser)
app.use("/api/v1", route)

app.listen(port,()=> console.log("aplikasi ini jalan di port",port))