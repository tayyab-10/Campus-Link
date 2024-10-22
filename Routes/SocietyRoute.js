const express = require("express");
const router = express.Router();
const {
  createSociety,
  updateSociety,
  deleteSociety,
  addMemberToSociety,
  removeMemberFromSociety,
  getAllSocieties,
  getSocietyById,
  getMembersOfSociety,
} = require("../Controllers/SocietyController");
const { isAuthenticatedUser } = require("../Middleware/auth");
const { uploadFileToCloudinary } = require("../Middleware/cloudinary");

router.route("/createSociety").post(isAuthenticatedUser,uploadFileToCloudinary("picture","societies",false),createSociety);
router.route("/updateSociety/:societyId").patch(isAuthenticatedUser, uploadFileToCloudinary("picture","societies",false),updateSociety);
router.route("/deleteSociety/:societyId").delete(isAuthenticatedUser, deleteSociety);
router.route("/getAllSocieties").get( getAllSocieties);
router.route("/getSocietyById/:societyId").get(isAuthenticatedUser, getSocietyById);
router.route("/getMembersOfSociety/:societyId").get(isAuthenticatedUser, getMembersOfSociety);
router
  .route("/addMemberToSociety/:societyId/:memberId")
  .post(isAuthenticatedUser, addMemberToSociety);
router
  .route("/removeMemberFromSociety/:societyId/:memberId")
  .delete(isAuthenticatedUser, removeMemberFromSociety);

module.exports = router;
