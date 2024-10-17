const catchAsyncErrors = require('../Middleware/catchAsyncErrors');
const Form = require('../Model/FormModel');
const ErrorHandler = require('../utiles/Errorhandler');



const createForm = catchAsyncErrors(async (req, res,next) => {
  const { societyType, universityName, fields } = req.body;

  if (!societyType || !universityName || !fields.length) {
    return next(new ErrorHandler("All Fields are required", 400));
  }

    const form = new Form({ societyType, universityName, fields });
    await form.save();
    res.status(201).json({ msg: 'Form created successfully', form });
  });

const getForms = catchAsyncErrors(async (req, res) => {

    const forms = await Form.find();
    res.json(forms);
  }); 

const getFormBySocietyType = catchAsyncErrors(async (req, res) => {
  const { societyType } = req.params;
  
    const form = await Form.findOne({ societyType });
    if (!form) {
      return res.status(404).json({ msg: 'Form not found' });
    }
    res.json(form);
  });

module.exports = { createForm, getForms, getFormBySocietyType };
