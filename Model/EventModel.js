const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  societyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Society', // Reference to the Society model
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dateOfEvent: {
    type: Date,
    required: true,
  },
  content: {
    type: String,
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
  }],
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
