const mongoose = require('mongoose');

const fieldSchema = new mongoose.Schema({
  fieldName: { 
    type: String, required: true 
},
  fieldLabel: {
    type: String, required: true
 },
  fieldType: { 
    type: String, required: true 
},
  required: {
    type: Boolean, default: false
    },
});

const formSchema = new mongoose.Schema({
  societyType: {
    type: String,
    required: true 
},
  societyName:{
    type:String,
  },
  universityName: { 
    type: String, 
    required: true
 },
  description:{
    type:String,
  },
  societybanner:{
    public_id: {
      type: String,
    },
    url: {
      type: String,
      required: true,
    }
  },
  socialLinks: {
    type: [String], // Array of strings to hold multiple social media links
    validate: {
      validator: function (v) {
        return v.every(link => /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i.test(link)); // Validate URLs
      },
      message: props => `${props.value} is not a valid URL!`,
    },
  },
  fields: [fieldSchema],
});

module.exports = mongoose.model('Form', formSchema);
