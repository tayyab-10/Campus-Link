const express=require("express");
const { registerUser, loginuser, logout, forgotPassword, resetPassword } = require("../Controllers/userController");
const upload =require("../Middleware/multer");
const passport=require('passport')
const router=express.Router();


router.route("/register").post(upload.single('avatar'),registerUser);

router.route("/login").post(loginuser);

router.route("/logout").get(logout);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );
  
  // Callback URL after successful authentication
  router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "/login",
      successRedirect: "/dashboard", // Change to the route you want after successful login
    })
  );
  


module.exports =router;