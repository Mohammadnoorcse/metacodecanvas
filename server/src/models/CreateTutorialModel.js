const mongoose = require('mongoose');

const tutorialSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: true
  },
  content: [
    {
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      code: {
        type: String
      }
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('tutorials', tutorialSchema);
