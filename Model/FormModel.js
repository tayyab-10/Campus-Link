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
    required: [true, "Please Enter Your Name"],
    maxLength: [40, "Name cannot exceed 40 characters"],
    minLength: [4, "Name should have more than 4 characters"],
  },
  universityName: { 
    type: String, 
    required: true
 },
  description:{
    type:String,
    required:[true,"Please Enter the Description"],
    maxLength: [200, "Description cannot exceed 200 characters"],
    minLength: [50, "Description should have more than 50 characters"],
  },
  fields: [fieldSchema],
});

module.exports = mongoose.model('Form', formSchema);
