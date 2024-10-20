const express = require("express");
const {
  sendMessage,
  getMessages,
  deleteMessage,
  updateMessage,
} = require("../Controllers/MessageController");

const { uploadFileToCloudinary } = require("../Middleware/cloudinary");
const { isAuthenticatedUser } = require("../Middleware/auth");
const router = express.Router();

router
  .route("/sendMessage/:channelId")
  .post(
    isAuthenticatedUser,
    uploadFileToCloudinary("attachment", "attachments", true),
    sendMessage
  );
router.route("/getMessages/:channelId").get(getMessages);
router
  .route("/updateMessage/:messageId")
  .patch(
    isAuthenticatedUser,
    uploadFileToCloudinary("attachment", "attachments", true),
    updateMessage
  );
router
  .route("/deleteMessage/:messageId")
  .delete(isAuthenticatedUser, deleteMessage);

module.exports = router;
