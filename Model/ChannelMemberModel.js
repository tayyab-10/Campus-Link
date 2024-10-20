const mongoose = require("mongoose");

const channelMemberSchema = new mongoose.Schema(
  {
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Channel",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    memberType: {
      type: String,
      enum: ["admin", "member", "moderator"],
      default: "member",
    },
  },
  { timestamps: true }
);

const ChannelMember = mongoose.model("ChannelMember", channelMemberSchema);
module.exports = ChannelMember;
