require('dotenv').config()
var mongoose = require('mongoose');

CONNECTION_STRING = "mongodb+srv://Glenn:<password>@pear-ox5gs.mongodb.net/test?retryWrites=true&w=majority";
/*need to put username, password*/

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

// INCLUDE YOUR MODELS HERE
require('./conversationModels.js');
require('./messageModels.js');
require('./supportModels.js');
require('./accountModels.js');
require('./reportModels.js');
