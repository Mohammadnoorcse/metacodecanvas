// ./routes/api.js
const express = require('express');
const router = express.Router();
const upload = require('../helpers/multer');
const UserController = require('../controllers/UserController'); 

router.post('/register', upload.single('file'), UserController.UserRegistration);
router.post("/login",UserController.UserLogin);

module.exports = router;

