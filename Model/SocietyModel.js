const mongoose = require("mongoose");

const socialMediaSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const SocietySchema = new mongoose.Schema({
  founder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: [20, "Name cannot exceed 20 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "is invalid"], // Ensures email format
    lowercase: true,
    trim: true,
  },

  picture: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    default: "",
  },

  social_links: [socialMediaSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Society = mongoose.model("Society", SocietySchema);

module.exports = Society;
