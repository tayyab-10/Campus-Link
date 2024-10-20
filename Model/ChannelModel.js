const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema(
  {
    societyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Society", // Reference to the Society model
      required: true,
    },
    channelName: {
      type: String,
      required: true,
      maxLength: [20, "Name cannot exceed 20 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },
    channelType: {
      type: String,
      enum: ["annoucements", "events", "general"],
      default: "general",
    },
    dateOfCreation: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
      maxLength: [200, "Description cannot exceed 200 characters"],
    },
    isPrivate: {
      type: Boolean,
      default: false,
    },
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model
      },
    ],
  },
  { timestamps: true }
);

const Channel = mongoose.model("Channel", channelSchema);
module.exports = Channel;
