const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name : {
    type :String,
    require  :true
  },
  year : {
    type :Number,
    require  :true
  },
  city : {
    type :String,
    require  :true
  },
  createdAt : {
    type : Date,
    default : Date.now()
  }
})

module.exports = Brand = mongoose.model("Brand",schema)
