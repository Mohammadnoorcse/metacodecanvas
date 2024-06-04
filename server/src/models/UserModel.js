const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String ,unique:true,
  },
  Password: {
    type: String
  },
  imageUrl: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
  CreatedDate:{
    type:Date,default:Date.now()
}
});

module.exports = mongoose.model('registrations', usersSchema);