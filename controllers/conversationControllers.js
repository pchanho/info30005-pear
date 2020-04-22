
// import libraries
var mongoose = require('mongoose');
var Conversations = mongoose.model('conversations');
var Messages = mongoose.model('messages');

// create conversation
var createConversation = function(req, res, next) {
    var item = {
        topic:req.body.topic,
        topicImage:req.body.topicImage,
        participants:req.body.particpants,
        startTime:req.body.startTime,
    };

    var data = new Conversations(item);
    data.save();

    res.redirect('/');
};

// read all conversations and their items
var readAllConversations = function(req, res, next) {
    Conversations.find({}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
        
};

/* OLD CODE
var readAllConversations = function(req, res, next) {
    Conversations.find()
        .lean()
        .then(function(doc) {
            res.render('conversations/readAll', {items: doc});
        });
};
*/

// update a single conversation's items
var updateConversation = function(req, res, next) {
    var id = req.body.id;

    Conversations.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no conversation found');
        }
        doc.topic = req.body.topic;
        doc.topicImage = req.body.topicImage;
        doc.participants = req.body.participants;
        doc.startTime = req.body.startTime;
        doc.save();
    });
    res.redirect('/');
};

// delete entire conversation by id
var deleteConversation = function(req, res, next) {
    var id = req.body.id;
    Conversations.findByIdAndRemove(id).exec();
    res.redirect('/');
};

// export functions
module.exports.createConversation = createConversation;
module.exports.readAllConversations = readAllConversations;
module.exports.updateConversation = updateConversation;
module.exports.deleteConversation = deleteConversation;


