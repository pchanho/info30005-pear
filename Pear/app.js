const express = require('express');
const bodyParser = require('body-parser');
const app = express();


/* connect to the database and register the schema
   put this line after the var routes = require('./routes/index'); will cause
   error: `Schema hasn't been registered for model "cafes".
 */
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

// handle author-management related requests
// first import the conversation route
const conversationRoutes = require('./routes/conversationRoutes');
//ADD ANY OTHER ROUTES HERE

// the author routes are added onto the end of '/author-management'
app.use("/conversation", conversationRoutes);

// start app and listen for incoming requests on port 3000
app.listen(3000, () => {
  console.log("The app is listening on port 3000!");
});
