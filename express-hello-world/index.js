// import express from 'express' ==> cara es6
const express = require("express"); //es5 //import dari module/package/depency
const looping = require ('./util/loop') //import dari file yg kita buat

const app = express();
const port = 5000;

app.get("/hello", (req, res) => {
   return res.status(200).json({
    "apa" : "Selamat datang",
  });
});

app.post("/hello",(req,res)=>{
  return res.status(200).json({
    
  })
})
app.listen(port, () => console.log("Project ini jalan di port ", port));
