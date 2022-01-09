module.exports = (res,error )=>{
  res.status(500).json({
    status : "internal Server Error",
    message : error.message
  })
}