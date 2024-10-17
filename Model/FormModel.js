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
  fields: [fieldSchema],
});

module.exports = mongoose.model('Form', formSchema);
