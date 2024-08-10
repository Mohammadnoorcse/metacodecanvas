require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: "dpimym60s",
  api_key: "889699455633954",
  api_secret: "yoxMW2orYjnah8NItZFf6mrty_I"
});

module.exports = cloudinary;