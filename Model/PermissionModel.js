const mongoose = require("mongoose");

const permissionSchema = new mongoose.Schema(
  {
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel", // Reference to the Society model
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    can_view_channel: {
      type: Boolean,
      default: true,
    },
    can_send_messages: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Permission", permissionSchema);
