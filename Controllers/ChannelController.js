const Channel = require("../Model/ChannelModel");
const catchAsyncError = require("../Middleware/catchAsyncErrors");
const mongoose = require("mongoose");

exports.createChannel = catchAsyncError(async (req, res, next) => {
  const { channelName, description, channelType, isPrivate } = req.body;
  const { societyId } = req.params;
  const session = await mongoose.startSession();
  try {
    const channel = await Channel.create(
      [
        {
          channelName,
          description,
          channelType,
          societyId,
          isPrivate,
          dateOfCreation: Date.now(),
        },
      ],
      { session }
    )
    await ChannelMember.create(
      [
        {
          channelId: channel[0]._id,
          userId: req.user._id,
          memberType: "admin",
        },
      ],
      { session }
    );
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

exports.getAllChannels = catchAsyncError(async (req, res, next) => {
  const { societyId } = req.params;
  const channels = await Channel.find({ societyId }).populate({
    path: "members",
    select: "name email avatar university",
  });
  res.status(200).json({
    success: true,
    data: channels,
    message: `All channels fetched for #${societyId} society successfully!!!`,
  });
});

exports.getChannel = catchAsyncError(async (req, res, next) => {
  const { channelId } = req.params;
  const channel = await Channel.findById(channelId).populate({
    path: "members",
    select: "name email avatar university",
  });
  res.status(200).json({
    success: true,
    data: channel,
    message: "Channel fetched successfully!!!",
  });
});
