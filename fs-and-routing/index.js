const express = require ('express');
const fs = require('fs');
const app  = express();
const port = 5000;
const axios = require('axios')

app.use(express.json())

//menyimpan data dari params
app.post("/:fileName", (req,res)=>{
  const data = req.body;
  const {fileName} = req.params

  fs.writeFile(`tmp/${fileName}.json`, JSON.stringify(data),(err)=>{
    if (err){
      return res.status(500).json({
        status : "failed",
        message : "file failed to created",
        error  :err.message
      })
    }
    res.status(201).json({
      status : "Successfully",
      message : `Berhasil membuat file dengan function  Write FIle di folder tmp dengan nama ${fileName}.json`
    });
  });
 });

//request yang meminta data dari params jadi fileName
app.get("/:fileName",(req,res)=>{
  const {fileName} = req.params
  fs.readFile(`tmp/${fileName}.json` ,{encoding : "utf-8"},(err,data)=>{
      if (err){
        return res.status(500).json({
          status : "failed",
          error : err.message
        })
      }
     
      return res.status(200).json(JSON.parse(data))
  })
});

//mengupdate data file
app.put("/:fileName", (req,res)=>{
  const body = req.body
  //membaca file
  fs.readFile(`tmp/${req.params.fileName}.json` ,{encoding : "utf-8"},(err,data)=>{
      if (err){
        return res.status(500).json({
          status : "failed",
          message : "nama file tidak ada"
        });
      };
      //menimpa file
      fs.writeFile(`tmp/${req.params.fileName}.json` , JSON.stringify(body),(err)=>{
      if (err){     
        return res.status(500).json({
          status : "Failed",
          message : err.message 
        });
      };
      return res.status(200).json({
        status : "success",
        message : `berhasil merubah file ${req.params.fileName}.json`
      })
    });   
  });
})

//menghapus file
app.delete("/:fileName", (req,res)=>{
  fs.unlink(`tmp/${req.params.fileName}.json`,(err)=>{
    if (err){
      return res.status(404).json({
        status : "failed",
        message : "File tidak ada"
      });
    }
    return res.status(200).json({
      status : "success",
      message : `file ${req.params.fileName}.json berhasil dihapus`

    })
    
  })
})

//merubah nama file
app.patch("/:before/:after", (req,res)=>{
  const {before,after} = req.params;
  fs.rename(`tmp/${before}.json`, `tmp/${after}.json`,(err)=>{
      if ( err){
        return res.status(500).json({
          status : "failed",
          message :err.message
        })
      }
      return res.status(200).json({
        status : "successffully",
        message : `${before}.json berhasil dirubah menjadi ${after}.json`
      })
  })
})

app.get("/fecthing/api",(req,res)=>{
  axios
  .get("https://61d65cc5b738160017181510.mockapi.io/api/v1/Sepeda")
  .then((res)=>console.log(res.data))
  .catch((err)=>console.log(err))
})

//untuk menjalankan aplikasi express
app.listen(port,()=>{
  console.log('Aplikasi ini jalan di port',port)
});