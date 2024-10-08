const express = require('express');
const router = require('./src/routes/api');
const app = express();
const path = require('path');

// Security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

// Implement security middleware
app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());

// Passing JSON object limit
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// Request rate limit
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

app.use('/AdsImages', express.static(path.join(__dirname, 'AdsImages')));
app.use('/AdminAndPublisherImage', express.static(path.join(__dirname, 'AdminAndPublisherImage')));

// MongoDB Connection
// const URI = "mongodb+srv://metacode3:metacode3!RNF@cluster0.l3mtknu.mongodb.net/metacodecanvas?retryWrites=true&w=majority";
const URI = "mongodb+srv://metacode3:metacode3!RNF@atlascluster.apxrixk.mongodb.net/metacodecanvas?retryWrites=true&w=majority";
const OPTION = { autoIndex: true };

mongoose
  .connect(URI, OPTION)
  .then(() => {
    console.log("Connection Success");
  })
  .catch((err) => { 
    console.log("Connection Error", err);
  });

// Routing Implementation
app.use("/api/v1", router);

// Undefined Route Implementation
app.use('*', (req, res) => {
  res.status(404).json({ status: "fail", data: "Not Found" });
});

// Export the app
module.exports = app;


