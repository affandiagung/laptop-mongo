const mongoose = require('mongoose') //import mongose
const schema = new mongoose.Schema({
  name : {
    type : String,
    required : true
  },
  year : {
    type : Number,
    required : true
  },
  city : {
    type : String,
    required : true
  },
  createdAt : {
    type : Date,
    default : Date.now()
  },
  updatedAt : {
    type : Date,
    default : Date.now()
  }
 })

const  Brand = mongoose.model("brand",schema)
 module.exports = Brand;
