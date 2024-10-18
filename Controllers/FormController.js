const catchAsyncErrors = require('../Middleware/catchAsyncErrors');
const Form = require('../Model/FormModel'); // Assuming your model is named Form
const ErrorHandler = require('../utiles/Errorhandler');

// Create a form
exports.createForm = catchAsyncErrors(async (req, res, next) => {
  try {
    const { societyType, societyName, universityName, description, fields } = req.body;

    const form = new Form({ 
      societyType,
      societyName,
      universityName,
      description,
      fields,
    });

    const savedForm = await form.save();

    res.status(201).json({
      success: true,
      formId: savedForm._id,
    });
  } catch (error) {
    return next(new ErrorHandler("Failed to create form", 400));
  }
});

// Get form by ID
exports.getFormById = catchAsyncErrors(async (req, res, next) => {
  const form = await Form.findById(req.params.id);

  if (!form) {
    return next(new ErrorHandler("Form with this ID does not exist", 404));
  }

  res.status(200).json({
    success: true,
    form,
  });
});

// Get all forms
exports.getForms = catchAsyncErrors(async (req, res, next) => {
  const forms = await Form.find();
  res.status(200).json({
    success: true,
    forms,
  });
});

// Get form by society type
exports.getFormBySocietyType = catchAsyncErrors(async (req, res, next) => {
  const { societyType } = req.params;

  const form = await Form.findOne({ societyType });

  if (!form) {
    return next(new ErrorHandler('Form not found', 404));
  }

  res.status(200).json({
    success: true,
    form,
  });
});

