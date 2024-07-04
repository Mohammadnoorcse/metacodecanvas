const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  ReplyUserName: {
    type: String
  },
  ReplyCommentId: {
    type: String
  },
  Reply: {
    type: String
  },
  CreatedDate:{
    type:Date,default:Date.now()
}
});

module.exports = mongoose.model('reply', usersSchema);