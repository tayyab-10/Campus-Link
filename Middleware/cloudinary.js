const cloudinary = require("cloudinary").v2;
const expressFileUpload = require("express-fileupload");

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to handle image uploads (single or multiple)
const uploadFileToCloudinary = (fieldName, folder, multiple = false) => async (req, res, next) => {
  
  try {
    // Check if there's a file in the request
    if (!req.files || !req.files[fieldName]) {
      return res.status(400).json({ message: `No file uploaded in field: ${fieldName}` });
    }

    const files = req.files[fieldName];
    const uploadedFiles = [];

    // If uploading multiple images, `files` will be an array, otherwise it's a single file
    if (multiple && Array.isArray(files)) {
      for (const file of files) {
        const uploadResult = await cloudinary.uploader.upload(file.tempFilePath, {
          folder: folder,
        });
        uploadedFiles.push({
          url: uploadResult.secure_url,
          public_id: uploadResult.public_id,
        });
      }
    } else {
      // Single file upload
      const uploadResult = await cloudinary.uploader.upload(files.tempFilePath, {
        folder: folder,
      });
      uploadedFiles.push({
        url: uploadResult.secure_url,
        public_id: uploadResult.public_id,
      });
    }
    console.log(uploadedFiles)
    // Store the uploaded file URLs and public_ids in the request object for later use
    req.filesUploaded = uploadedFiles;

    // Call next middleware/controller
    next();
  } catch (error) {
    console.error("Error uploading file to Cloudinary:", error);
    res.status(500).json({ message: "Error uploading file" });
  }
};

module.exports = { uploadFileToCloudinary };
