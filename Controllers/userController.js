const ErrorHandler = require("../utiles/Errorhandler");
const catchAsyncError = require("../Middleware/catchAsyncErrors");
const User = require("../Model/userModel");
const bcrypt = require("bcryptjs");
const sendToken = require("../utiles/jwtToken");
const sendEmail = require("../utiles/email");
const crypto = require("crypto");

//Register a user:
exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password, university } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    university,
    avatar: {
      public_id: req.filesUpload[0].public_id,
      url: req.filesUpload[0].url,
    },
  });
  await user.save();
  sendToken(user, 201, res);
});

//login User:
exports.loginuser = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  // Find user in database
  const user = await User.findOne({ email }).select("+password");

  // Check if user exists
  if (!user) {
    return next(new ErrorHandler("Invalid Email & Password", 401));
  }

  // Check if password matches
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email & Password", 401));
  }

  // Get JWT token
  sendToken(user, 200, res);
});

// SignIn Using Google

exports.signInUsingGoogle = async (req, res, next) => {
  console.log(req.body);
  const { email, name, password,photoUrl } = req.body;
  // Check if email and password are provided
  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }
  // Find user in database

  let user = await User.findOne({ email });
  // Check if user exists
  if (!user) {
    user = await User.create({
      name,
      email,
      password,
      university: "University of Engineering and Technology, Lahore",
      avatar: {
        public_id: "public id",
        url: photoUrl
      },
    });
  }
  sendToken(user, 200, res);
};

//logout User
exports.logout = catchAsyncError(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot Password

exports.forgotPassword = catchAsyncError(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new ErrorHandler("User not found", 404));
  }

  // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`; // ${req.protocol}: only when you host this website on the server

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.email,
      subject: `CampusLink Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHandler(error.message, 500));
  }
});

// Reset Password
exports.resetPassword = catchAsyncError(async (req, res, next) => {
  // Creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHandler(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 400));
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);
});

// Fetch All Users

exports.getAllUsers = catchAsyncError(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

//Get user Details
exports.GetUserDetails=catchAsyncError(async(req,res,next)=>{
  
  const user =await User.findById(req.user.id);

   res.status(200).json({
      success:true,
      user
   })
})