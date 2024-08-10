// ./controllers/UserController.js
const cloudinary = require('../helpers/cloudinary'); // Adjust the path if necessary
const { v4: uuidv4 } = require('uuid');
const UsersModel = require('../models/UserModel'); // Adjust the path as necessary
const BlogModel = require('../models/BlogModel');
const TutorialModel = require('../models/CreateTutorialModel');
const jwt=require('jsonwebtoken');
const CommentModel = require('../models/CommentModel');
const ReplyModel = require('../models/ReplyModel');
const QuizModel = require('../models/QuizModel');



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


//Post Blog..
exports.BlogPost = async (req, res) => {
  try {
    const blog = new BlogModel({
      UserEmail: req.body.UserEmail,
      Title: req.body.Title,
      Description: req.body.Description,
      });
    const data = await blog.save();
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

//Read Renter Details
exports.ReadUserBlog = (req, res) => {
  let UserEmail = req.params.Email;

  BlogModel.aggregate([
    { $match: { UserEmail: UserEmail } },
    {
      $project: {
        _id: 1,
        UserEmail: 1,
        Title: 1,
        Description: 1,
        CreatedDate: 1,
      },
    },
    { $sort: { CreatedDate: -1 } }, // Sort by createdAt field in descending order
  ])
    .exec()
    .then((data) => {
      let count = data.length;
      res.status(200).json({ status: "success", count: count, data: data });
    })
    .catch((err) => {
      res.status(400).json({ status: "fail", data: err });
    });
};

// read blog by id
exports.ReadBlogById = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { _id: id };

    // Using the async/await syntax
    let data = await BlogModel.find(query);

    // Responding with the data if found
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    // Handling errors
    res.status(400).json({ status: "fail", data: err });
  }
};




// Create a new tutorial
exports.CreateTutorial = async (req, res) => {
  try {
    const { header, language, subTitle, content } = req.body;

    const newTutorial = new TutorialModel({
      header,
      language,
      subTitle,
      content
    });

    const savedTutorial = await newTutorial.save();

    res.status(201).json({
      status: 'success',
      data: savedTutorial
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

//Get tutorial
exports.GetTutorials = async (req, res) => {
  try {
    const data = await TutorialModel.find(); // Retrieve all tutorials from the database

    res.status(200).json({
      status: 'success',
      data: data
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

//Blog Search
exports.blogSearch = async (req, res) => {
  const searchTerm = req.query.searchTerm || "";
  console.log("Received search term:", searchTerm);  // Debugging line
  try {
    const query = searchTerm ? { Title: { $regex: searchTerm, $options: 'i' } } : {};
    const data = await BlogModel.find(query);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    console.error("Error during blog search:", err);  // Debugging line
    res.status(400).json({ status: "fail", data: err });
  }
};


//Comment..
exports.Comment = async (req, res) => {
  try {
    const comment = new CommentModel({
      UserName: req.body.UserName,
      BlogId: req.body.BlogId,
      Comment: req.body.Comment,
      });
    const data = await comment.save();
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// read blog by id
exports.ReadCommentById = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { BlogId: id };

    // Find comments and sort by createdAt field in descending order
    let data = await CommentModel.find(query).sort({ CreatedDate: -1 });

    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

//Reply..
exports.Reply = async (req, res) => {
  try {
    const reply = new ReplyModel({
      ReplyUserName: req.body.ReplyUserName,
      ReplyCommentId: req.body.ReplyCommentId,
      Reply: req.body.Reply
      });
    const data = await reply.save();
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

// read reply by comment id
exports.ReadReplyById = async (req, res) => {
  try {
    let id = req.params.id;
    let query = { BlogId: id };

    let data = await CommentModel.find(query).sort({ CreatedDate: -1 });

    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

//Quiz
exports.createQuizQuestion = async (req, res) => {
  try {
    const quizQuestion = new QuizModel({
      headername: req.body.headername,
      questionText: req.body.questionText,
      answerOptions: req.body.answerOptions
    });
    const data = await quizQuestion.save();
    res.status(200).json({ status: "success", data: data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

//question fetch
exports.ReadQuizByHeader = async (req, res) => {
  try {
    let header = req.query.header;
    let query = { headername: header };

    // Find comments and sort by createdAt field in descending order
    let data = await QuizModel.find(query);

    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

//tutorial fetch by header and subtitle
exports.ReadTutorialByHeaderAndSubtitle = async (req, res) => {
  try {
    let header = req.query.header;
    let subTitle = req.query.subTitle;
    // let subTitle = req.query.subTitle;
    let query = { header: header,subTitle:subTitle };

    let data = await TutorialModel.find(query);

    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};
exports.ReadTutorialByHeader = async (req, res) => {
  try {
    let header = req.query.header;
    
    // let subTitle = req.query.subTitle;
    let query = { header: header};

    let data = await TutorialModel.find(query);

    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};



