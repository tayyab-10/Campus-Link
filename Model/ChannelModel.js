const mongoose = require('mongoose');

const channelSchema = new mongoose.Schema({
  societyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Society', // Reference to the Society model
    required: true,
  },
  channelName: {
    type: String,
    required: true,
    maxLength: [20, "Name cannot exceed 20 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
}, { timestamps: true });

module.exports = mongoose.model('Channel', channelSchema);
