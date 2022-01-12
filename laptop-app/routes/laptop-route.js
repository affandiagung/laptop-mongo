const express = require('express')
const router = express.Router()
const {createLaptop, getLaptop} = require('../controllers/laptop-controller');
const { isAdmin, isLogin } = require('../middlewares/auth');
const {uploadLocal} = require ("../middlewares/fileUpload")

router.post("/",isAdmin,uploadLocal("image") ,createLaptop);
router.get("/",isLogin,getLaptop)
module.exports = router   