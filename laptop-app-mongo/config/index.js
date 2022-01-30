const mongoose = require('mongoose')

module.exports = ()=> {
  mongoose.connect(process.env.URI_MONGODB,{},(error)=>{
    if (error){
      return console.log("failed connnect to database MongoDB")
    }
    console.log("Connected to cloud.mongoDB.com")
  })
}