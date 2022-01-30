const mongoose = require('mongoose')

module.exports =  () =>{
  
  // koneksi mongose ke mongoDBbeberapa  parameter/argument, uri = ddari cloud.mongoDB, option, callback 
  mongoose.connect(process.env.URI,{},(err)=>{
    if( err){
      return console.log("Connection failed to mongoDB atlas")
    }
    console.log("Connected to mongoDB atlas")
  }) 
}