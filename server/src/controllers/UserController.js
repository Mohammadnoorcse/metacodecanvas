// ./controllers/UserController.js
const cloudinary = require('../helpers/cloudinary'); // Adjust the path if necessary
const { v4: uuidv4 } = require('uuid');
const UsersModel = require('../models/UserModel'); // Adjust the path as necessary
const jwt=require('jsonwebtoken');



//User Registration
exports.UserRegistration = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file attached" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'MetaCodeCanvas/UserPhoto',
      public_id: uuidv4(),
      transformation: [
        { width: 864, height: 864 }
      ]
    });

    const users = new UsersModel({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: req.body.Password,
      imageUrl: result.secure_url,
      cloudinary_id: result.public_id,
    });
    const data = await users.save();
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};


//User Login
exports.UserLogin = (req, res) => {
  const reqBody = req.body;
  
  UsersModel.aggregate([
      { $match: reqBody },
      { $project: { _id: 0, Email: 1, imageUrl: 1, Name: 1 } }
  ])
  .then((data) => {
      if (data.length > 0) {
          const payload = {
              exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // Token expiry: 24 hours
              data: data[0].Email
          };
          const token = jwt.sign(payload, process.env.JWT_SECRET || "Secretkey123456789"); // Use environment variable for the secret key
          res.status(200).json({ status: "success", token: token, data: data[0] });
      } else {
          res.status(401).json({ status: "unauthorized" });
      }
  })
  .catch((err) => {
      console.error("Database query failed", err);
      res.status(400).json({ status: "fail", data: err });
  });
};