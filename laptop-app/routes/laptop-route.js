const express = require('express')
const router = express.Router()
const {createLaptop, getLaptop} = require('../controllers/laptop-controller');
const { isAdmin, isLogin } = require('../middlewares/auth');
const {uploadLocal, uploadCloud} = require ("../middlewares/fileUpload")

router.post("/",uploadCloud("image") ,createLaptop);
router.get("/",isLogin,getLaptop)
module.exports = router   