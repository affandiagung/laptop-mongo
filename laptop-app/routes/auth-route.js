const express = require('express')
const router = express.Router()
const {register,login} = require('../controllers/auth-controllers');
const { createProfile, getProfile } = require('../controllers/profile-controllers');
const {isAdmin} = require('../middlewares/auth')


router.post("/register",register);
router.post("/login",login);
router.post("/profile",isAdmin,createProfile)
router.get("/profile",isAdmin, getProfile)


module.exports = router   