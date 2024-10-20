const catchAsyncError = require("../Middleware/catchAsyncErrors");
const mongoose = require("mongoose");
const ChannelMember = require("../Model/ChannelMemberModel");
const { getSocket } = require("../socket");

exports.joinChannel = catchAsyncError(async (req, res, next) => {
  const { channelId, userId } = req.body;
  const session = await mongoose.startSession();
  try {
    const channel = await ChannelMember.create(
      [
        {
          channelId,
          userId,
          memberType: "member",
        },
      ],
      { session }
    );
    const io = getSocket();
    io.to(channelId.toString()).emit("joinChannel", { userId, channelId });
    await session.commitTransaction();
    res.status(200).json({
      success: true,
      data: channel,
      message: "Channel created successfully!!!",
    });
  } catch (error) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();
    next(error); // Let `catchAsyncError` handle the error
  } finally {
    session.endSession(); // End the session whether successful or failed
  }
});

exports.getChannelMembers = catchAsyncError(async (req, res, next) => {
  const { channelId } = req.params;
  const channel = await ChannelMember.findById(channelId).populate({
    path: "userId",
    select: "name email avatar university",
  });
  res.status(200).json({
    success: true,
    data: channel,
    message: "All channel memebers fetched successfully!!!",
  });
});

exports.leaveChannel = catchAsyncError(async (req, res, next) => {
  const { channelId, userId } = req.body;
  const session = await mongoose.startSession();
  try {
    await ChannelMember.deleteOne(
      {
        channelId,
        userId,
      },
      { session }
    );
    const io = getSocket();
    io.to(channelId.toString()).emit("leaveChannel", { userId, channelId });
    await session.commitTransaction();
    res.status(200).json({
      success: true,
      message: "Channel left successfully!!!",
    });
  } catch (error) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();
    next(error); // Let `catchAsyncError` handle the error
  } finally {
    session.endSession(); // End the session whether successful or failed
  }
});
