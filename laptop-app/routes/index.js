const express = require('express')
const router = express.Router()
const brandRoute = require('./brand-route')
const authRoute = require('./auth-route')

router.use("/brand",brandRoute)
router.use("/auth",authRoute )
module.exports = router 