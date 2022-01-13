const express = require('express') //cara import
const router = express.Router()
const fsRouter = require('./fs-routes') 
const axiosRoutes = require('./axios-routes')


router.use("/fs",fsRouter)
router.use("/axios",axiosRoutes)

module.exports = router //cara export