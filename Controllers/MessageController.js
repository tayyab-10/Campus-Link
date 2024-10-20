const Message = require("../Model/MessageModel");
const catchAsyncError = require("../Middleware/catchAsyncErrors");
const mongoose = require("mongoose");
const { getSocket } = require("../socket");
exports.sendMessage = catchAsyncError(async (req, res, next) => {
  const { message } = req.body;
  const { channelId } = req.params;
  const session = await mongoose.startSession();
  try {
    const newMessage = await Message.create(
      [
        {
          channelId,
          message,
          userId: req.user._id,
          dateOfCreation: Date.now(),
          attachment:
            req.filesUploaded &&
            req.filesUploaded.length > 0 &&
            req.filesUploaded.map((file) => ({
              public_id: file.public_id,
              url: file.url,
            })),
        },
      ],
      { session }
    );
    const io = getSocket();
    io.to(channelId.toString()).emit("newMessage", {
      channelId: channelId,
      message: newMessage,
    });
    await session.commitTransaction();
    res.status(200).json({
      success: true,
      data: newMessage,
      message: "Message sent successfully!!!",
    });
  } catch (error) {
    // If any error occurs, abort the transaction
    await session.abortTransaction();
    next(error); // Let `catchAsyncError` handle the error
  } finally {
    session.endSession(); // End the session whether successful or failed
  }
});

exports.getMessages = catchAsyncError(async (req, res, next) => {
  const { channelId } = req.params;
  const messages = await Message.find({ channelId }).populate({
    path: "userId",
    select: "name email avatar university",
  });
  res.status(200).json({
    success: true,
    data: messages,
    message: "All messages fetched successfully!!!",
  });
});

exports.deleteMessage = catchAsyncError(async (req, res, next) => {
  const { messageId } = req.params;
  const message = await Message.findById(messageId);
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  await message.remove();
  res.status(200).json({
    success: true,
    message: "Message deleted successfully",
  });
});

exports.updateMessage = catchAsyncError(async (req, res, next) => {
  const { messageId } = req.params;
  const message = await Message.findById(messageId);
  if (!message) {
    return res.status(404).json({ message: "Message not found" });
  }
  message.message = req.body.message;
  message.attachment =
    req.filesUploaded && req.filesUploaded.length > 0
      ? req.filesUploaded.map((file) => ({
          public_id: file.public_id,
          url: file.url,
        }))
      : message.attachment;
  await message.save();
  res.status(200).json({
    success: true,
    data: message,
    message: "Message updated successfully",
  });
});
