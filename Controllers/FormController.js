const catchAsyncErrors = require('../Middleware/catchAsyncErrors');
const Form = require('../Model/FormModel');
const ErrorHandler = require('../utiles/Errorhandler');



exports.createForm = async (req, res) => {
  try {
    const { societyType, societyName, universityName, description, fields } = req.body;

    const form = new FormTemplate({
      societyType,
      societyName,
      universityName,
      description,
      fields,
    });

    const savedForm = await form.save();

    res.status(201).json({
        success:true,
       formId: savedForm._id,
      });
  } catch (error) {
    res.status(400).json({ message: "Failed to create form", error });
  }
};

export const getFormbyid = catchAsyncErrors(async (req, res) => {
  const form=await Form.findById(req.params.id)

  if(!form){
    return next(new ErrorHandler("Form with this id Does not exist",404)
  }

   res.status(200).json({
      success: true,
      form,
    });
}); 

export const getForms = catchAsyncErrors(async (req, res) => {

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

module.exports = {getForms, getFormBySocietyType };
