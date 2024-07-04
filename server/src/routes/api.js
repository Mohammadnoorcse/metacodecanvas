// ./routes/api.js
const express = require('express');
const router = express.Router();
const upload = require('../helpers/multer');
const UserController = require('../controllers/UserController'); 

router.post('/register', upload.single('file'), UserController.UserRegistration);
router.post("/login",UserController.UserLogin);
router.post("/blogpost",UserController.BlogPost);
router.get("/ReadUserBlog/:Email",UserController.ReadUserBlog);
router.get("/ReadBlogById/:id",UserController.ReadBlogById);
router.post("/createTutorial",UserController.CreateTutorial);
router.get("/getTutorials",UserController.GetTutorials);
router.get('/blogSearch',UserController.blogSearch);
router.post('/comment',UserController.Comment);
router.get('/ReadCommentById/:id',UserController.ReadCommentById);
router.post('/reply',UserController.Reply);
router.post('/createQuizQuestion',UserController.createQuizQuestion);
router.post('/createQuizQuestion',UserController.createQuizQuestion);
router.get('/ReadQuizByHeader',UserController.ReadQuizByHeader);


module.exports = router;

