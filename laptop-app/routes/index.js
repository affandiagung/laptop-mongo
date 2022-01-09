const express = require('express')
const router = express.Router()
const brandRoute = require('./brand-route')

router.use("/brand",brandRoute)
module.exports = router