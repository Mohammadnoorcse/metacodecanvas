const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  UserEmail: {
    type: String 
  },
  Title: {
    type: String
  },
  Description: {
    type: String,
  },
  CreatedDate:{
    type:Date,default:Date.now()
}
});

module.exports = mongoose.model('blogs', usersSchema);