// ./routes/api.js
const express = require('express');
const router = express.Router();
const upload = require('../helpers/multer');
const videouploader = require('../helpers/videoMulter');
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
router.get('/ReadTutorialByHeaderAndSubtitle', UserController.ReadTutorialByHeaderAndSubtitle);
router.get('/ReadTutorialByHeader', UserController.ReadTutorialByHeader);
router.post('/CourseVideo', videouploader.single('file'), UserController.CourseVideo);
router.get('/getVideo', UserController.GetVideo);



module.exports = router;

