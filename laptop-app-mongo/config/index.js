const mongoose = require('mongoose')

module.exports = ()=> {
  mongoose.connect(process.env.URI_MONGODB,{},(error)=>{
    if (error){
      return console.log("failed to connected to mongodb")
    }
    console.log("Connected to mongoDB")
  })
}