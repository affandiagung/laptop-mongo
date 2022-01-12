const express = require('express')
const { getSepeda, createSepeda } = require('../controllers/sepeda-controllers')
const router = express.Router()
const {isLoginAdmin} = require('../middlewares/admin')
const {uploadGambarLocal} = require('../middlewares/gambarUpload')

router.get("/",isLoginAdmin, getSepeda)
router.post("/",isLoginAdmin,uploadGambarLocal("gambar"),createSepeda)

module.exports = router 