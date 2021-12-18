
const express = require('express');
const router = express.Router();
const fileUploader = require('./config/cloudinary.config');

router.post('/cloudinary-upload', (req, res, next) => {
  fileUploader(req, res, function (err) {
  if (!req.file) {
    next(new Error('No file uploaded!'));
    return;
  }
 
  res.json({ secure_url: req.file.path });
  })
});

module.exports = router;