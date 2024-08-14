// videoSchema in PostModel
const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoCategory: {
    type: String,
  },
  title: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  }
});

module.exports = mongoose.model('Video', videoSchema);
