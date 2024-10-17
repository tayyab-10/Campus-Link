const express = require("express");
const {
  registerUser,
  loginuser,
  logout,
  forgotPassword,
  resetPassword,
  signInUsingGoogle,
  getAllUsers,
  getUserDetails
} = require("../Controllers/userController");
const upload = require("../Middleware/multer");
const {uploadFileToCloudinary}=require("../Middleware/cloudinary");
const { isAuthenticatedUser } = require("../Middleware/auth");
const router = express.Router();

router.route("/register").post(uploadFileToCloudinary("avatar","avatars",false), registerUser);
router.route("/signInUsingGoogle").patch(signInUsingGoogle);
router.route("/login").post(loginuser);
router.route("/logout").get(logout);
router.route("/getUserDetails").get(isAuthenticatedUser,getUserDetails);
router.route("/fetchUsers").get(getAllUsers);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
