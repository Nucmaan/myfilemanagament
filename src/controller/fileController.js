const path = require("path");
const fileService = require("../service/fileService.js");

const uploadFile = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "No file uploaded" });

    const saved = await fileService.saveFile(req.file.filename);

    if (!saved) return res.status(500).json({ message: "File save failed" });

    res.status(201).json({
      message: "File uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload failed" });
  }
};

const getAllFiles = async (req, res) => {
  try {
    const files = await fileService.getAllFiles();

    if (!files) return res.status(500).json({ message: "File retrieval failed" });

    res.status(200).json({
      message: "Files retrieved successfully",
      data: files,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Retrieval failed" });
  }
}

module.exports = {
  uploadFile,
  getAllFiles
};
