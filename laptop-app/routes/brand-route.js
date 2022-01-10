const express = require('express')
const router = express.Router()
const {createBrand, getBrands,getBrand,updatedBrand,deleteBrand} = require('../controllers/brand-controller')


router.post("/", createBrand);
router.get("/", getBrands );
router.get("/:brandId",getBrand)
router.put("/:brandId", updatedBrand)
router.delete("/:brandId",deleteBrand )


module.exports = router  