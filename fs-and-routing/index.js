const express = require ('express');
const router = require('./routes');
const app  = express();
const port = 5000;

app.use(express.json())
app.use("/api/v1",router)

//untuk menjalankan aplikasi express
app.listen(port,()=>{
  console.log('Aplikasi ini jalan di port',port)
});