const express = require('express');
const router = express.Router();
 
const fileController = require('../controller/fileController.js');

const { upload } = require('../utils/MulterUpload.js');


router.post('/upload', upload.single('image'), fileController.uploadFile);

router.get('/images', fileController.getAllFiles);

module.exports = router;
