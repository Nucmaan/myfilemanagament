const multer = require("multer");
const path = require("path");

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/"); // Save files in the public folder
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

// Define allowed MIME types
const allowedTypes = [
  // Images
  "image/jpeg",
  "image/png",
  "image/jpg",
  "image/gif",

  // Videos
  "video/mp4",
  "video/mpeg",

  // Audio
  "audio/mpeg",
  "audio/mp3",
  "audio/ogg",

  // Documents
  "application/pdf",
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
];

// File filter middleware
const fileFilter = (req, file, cb) => {
  console.log("Received file with MIME type:", file.mimetype); // Optional logging

  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Only image, video, audio, and document files are allowed"
      ),
      false
    );
  }
};

// Create multer instance
const upload = multer({ storage, fileFilter });

module.exports = {
  upload,
};
