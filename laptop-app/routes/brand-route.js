const express = require('express')
const router = express.Router()
const {isLogin,isAdmin} = require("../middlewares/auth")
const {createBrand, getBrands,getBrand,updatedBrand,deleteBrand} = require('../controllers/brand-controller')


router.post("/",isAdmin, createBrand);
router.get("/",isLogin, getBrands );
router.get("/:brandId",isLogin,getBrand)
router.put("/:brandId", isAdmin, updatedBrand)
router.delete("/:brandId",isAdmin,deleteBrand )


module.exports = router  