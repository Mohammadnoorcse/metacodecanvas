const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  UserName: {
    type: String
  },
  BlogId: {
    type: String 
  },
  Comment: {
    type: String
  },
  CreatedDate:{
    type:Date,default:Date.now()
}
});

module.exports = mongoose.model('comments', usersSchema);