/*
INFO30005 Group Assignment - Pear: App

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import libraries
const fileupload = require("express-fileupload");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cloudinary = require('cloudinary').v2;
const cors = require('cors');


// connect to the database and register each schema
// this must occur before importing each of the routes (line 22)
require('./models/database.js');

//used for sending images
app.use(fileupload({
  useTempFiles: true
}
));
// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));
// deal with connection error between React and mongoDB
app.use(cors());

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>Pear</H1>");
});

// first import the each of the routes
const conversationRoutes = require('./routes/conversationRoutes');
const messageRoutes = require('./routes/messageRoutes');
const supportRoutes = require('./routes/supportRoutes');
const accountRoutes = require('./routes/accountRoutes');
const reportRoutes = require('./routes/reportRoutes');
const faqRoutes = require('./routes/faqRoutes');

// then specify the path for each of the routes
app.use("/conversation", conversationRoutes);
app.use("/message", messageRoutes);
app.use("/support", supportRoutes);
app.use("/faq", faqRoutes);
app.use("/account", accountRoutes);
app.use("/report", reportRoutes);

// start app and listen for incoming requests on port 3000
// OR a different port assigned by Heroku
app.listen(process.env.PORT || 3001, () => {
	console.log("The pear app is running!");
});

module.exports = app;