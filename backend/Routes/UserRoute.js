const express=require("express");
const { registerUser, loginuser, logout, forgotPassword, resetPassword } = require("../Controllers/userController");
const upload =require("../Middleware/multer");

const router=express.Router();


router.route("/register").post(upload.single('avatar'),registerUser);

router.route("/login").post(loginuser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);


module.exports =router;