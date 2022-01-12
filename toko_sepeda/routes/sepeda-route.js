const express = require('express')
const { getSepeda, createSepeda } = require('../controllers/sepeda-controllers')
const router = express.Router()
const {isLoginAdmin} = require('../middlewares/admin')
const {uploadLocal} = require('../middlewares/gambarUpload')

router.get("/",isLoginAdmin, getSepeda)
router.post("/",isLoginAdmin,uploadLocal("image"),createSepeda)

module.exports = router 