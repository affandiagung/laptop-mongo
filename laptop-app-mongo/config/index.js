const mongoose = require('mongoose')

module.exporst = ()=>{
  mongoose.connect("uri",{},(error)=>{
    if(error){
      return console.log("Error has been occured")
    }
    console.log("connect to mongoDB")
  })
 
}