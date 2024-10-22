const catchAsyncErrors = require('../Middleware/catchAsyncErrors');
const Form = require('../Model/FormModel'); 
const ErrorHandler = require('../utiles/Errorhandler');

// Create a form
exports.createForm = catchAsyncErrors(async (req, res, next) => {
    const { societyType, societyName, universityName,societybanner,socialLinks,description, fields } = req.body;

    const form = new Form({ 
      societyType,
      societyName,
      universityName,
      description,
      societybanner,
      socialLinks,
      fields,
    });

    const savedForm = await form.save();

    res.status(201).json({
      success: true,
      formId: savedForm._id,
    });
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



