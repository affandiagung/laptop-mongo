const express = require('express')
const router = express.Router()
const {createLaptop} = require('../controllers/laptop-controller');
const { isAdmin } = require('../middlewares/auth');
const {uploadLocal} = require ("../middlewares/fileUpload")

router.post("/",isAdmin,uploadLocal("image") ,createLaptop);

module.exports = router   