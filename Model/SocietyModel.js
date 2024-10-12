const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const SocietySchema = new mongoose.Schema({

    societyID: {
        type: String,
        // required: true,
        unique: true,
      },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
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
    match: [/\S+@\S+\.\S+/, 'is invalid'], // Ensures email format
    lowercase: true,
    trim: true
  },
  
  password: {
    type: String,
    required: true,
    minLength: [8, "Password should be greater than 8 characters"],
    select: false,
  },
  
  brand: {
    type: String,
    default: ''
  },

  picture: {
    type:String,
  },
  
  dateOfCreation: {
    type: Date,
    default: Date.now
  },

  description: {
    type: String,
    default: ''
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Pre-save hook to hash password before saving
SocietySchema.pre("save", async function(next) {   //userSchema.pre("save", ...) registers a middleware function to run before the document is saved
    if (!this.isModified("password")) { // if password is not modified
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  });

// Method to compare entered password with hashed password
SocietySchema.methods.comparePassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Password);
};

const Society = mongoose.model('Society', SocietySchema);

module.exports = Society;
