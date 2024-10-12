const express=require("express");
const router=express.Router();
const upload =require("../Middleware/multer");
const { createSociety } = require("../Controllers/SocietyController");
const { isAuthenticatedUser } = require("../Middleware/auth");

router.route("/createSociety").post(isAuthenticatedUser,createSociety);



module.exports =router;