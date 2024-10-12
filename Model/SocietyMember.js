const mongoose = require('mongoose');

// Define the SocietyMember schema
const societyMemberSchema = new mongoose.Schema({
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
  role: {
    type: String,
    default: 'member', // Default role would be member
    enum: ['member', 'admin', 'founder'], // Possible roles
  },
  dateOfJoining: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

module.exports = mongoose.model('SocietyMember', societyMemberSchema);
