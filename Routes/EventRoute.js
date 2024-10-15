const express=require("express");
const router=express.Router();
const { createEvent,deleteEvent,updateEvent, getEventsForSociety } = require("../Controllers/EventController");
const { isAuthenticatedUser } = require("../Middleware/auth");

router.route("/createEvent").post(isAuthenticatedUser,createEvent);
router.route("/deleteEvent/:eventId").delete(isAuthenticatedUser,deleteEvent);
router.route("/updateEvent/:eventId").patch(isAuthenticatedUser,updateEvent);
router.route("/getEventsForSociety/:societyId").post(isAuthenticatedUser,getEventsForSociety);



module.exports =router;