const mongoose = require('mongoose');

const answerOptionSchema = new mongoose.Schema({
  answerText: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true,
    default: false
  }
});

const quizQuestionSchema = new mongoose.Schema({
  headername: {
    type: String,
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  answerOptions: [answerOptionSchema],
  CreatedDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('QuizQuestion', quizQuestionSchema);
