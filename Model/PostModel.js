const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  societyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Society', // Reference to the Society model
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
  dateOfCreation: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });


module.exports = mongoose.model('Post', postSchema);
