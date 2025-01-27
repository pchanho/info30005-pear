/*
INFO30005 Group Assignment - Pear: Database

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import libraries
require('dotenv').config()
const mongoose = require('mongoose');

// input username, password is stored in dotenv
CONNECTION_STRING = "mongodb+srv://admin:<password>@pear-ox5gs.mongodb.net/test?retryWrites=true&w=majority";

// connect to the database
MONGO_URL =
CONNECTION_STRING.replace("<password>",process.env.MONGO_PASSWORD);
mongoose.connect(MONGO_URL || "mongodb://localhost/info30005", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "info30005-pear"
});

const db = mongoose.connection;
db.on("error", err => {
    console.error(err);
    process.exit(1);
});

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" +
db.port);
});

// import all the models
require('./conversationModels.js');
require('./messageModels.js');
require('./supportModels.js');
require('./accountModels.js');
require('./reportModels.js');
require('./faqModels.js');
