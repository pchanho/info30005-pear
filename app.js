
// import libraries
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// connect to the database and register each schema
// this must occur before importing each of the routes (line 22)
require('./models/database.js');

// use the body-parser middleware, which parses request bodies into req.body
// support parsing of json
app.use(bodyParser.json());
// support parsing of urlencoded bodies (e.g. for forms)
app.use(bodyParser.urlencoded({ extended: true }));

// GET home page
app.get("/", (req, res) => {
  res.send("<H1>Pear</H1>");
});

// first import the each of the routes
const conversationRoutes = require('./routes/conversationRoutes');
const supportRoutes = require('./routes/supportRoutes');
const accountRoutes = require('./routes/accountRoutes');
const reportRoutes = require('./routes/reportRoutes');
// ADD ANY OTHER ROUTES HERE

// then specify the path for each of the routes
app.use("/conversation", conversationRoutes);
app.use("/support", supportRoutes);
app.use("/account", accountRoutes);
app.use("/report", reportRoutes);
// ADD ANY OTHER ROUTES HERE

// start app and listen for incoming requests on port 3000 or the best alternative
app.listen(process.env.PORT || 3000, () => 
	{ console.log("The library app is running!");
});
