const express = require('express')
const { register, login, getAdmins, deleteAdmin, updateAdmin } = require('../controllers/admin-controllers')
const { isLoginAdmin } = require('../middlewares/admin')

const router = express.Router()

router.post("/register", register)
router.post("/login",login)
router.get("/",isLoginAdmin,getAdmins)
router.delete("/:adminId",isLoginAdmin,deleteAdmin)
router.put("/:adminId",isLoginAdmin,updateAdmin)

module.exports = router