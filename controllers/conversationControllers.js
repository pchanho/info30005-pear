
// import libraries
var mongoose = require('mongoose');
var Conversations = mongoose.model('conversations');
//var Messages = mongoose.model('messages');

// create conversation
var createConversation = function(req, res, next) {
    var item = {
        topic:req.body.topic,
        topicImage:req.body.topicImage,
        participants:req.body.participants,
        startTime:req.body.startTime,
        status:req.body.status,
    };

    var data = new Conversations(item);
    data.save();

    res.redirect('/');
};

// read all conversations and their items
var readAllConversations = function(req, res, next) {
    Conversations.find({}, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.json(doc);
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

// read all conversations new conversations that are not filled (readNewConversations) 


// read all conversations where:
// status = NOT_FULL = 0










// read one conversation and it's items
var readOneConversation = function(req, res, next) {
    var id = req.body.id;

    Conversations.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no conversation found');
        } else {
            res.json(doc);
        }
    });
};

// read participants
var readParticipants = function(req, res, next) {
    var id = req.body.id;

    Conversations.findById(id, 'participants', { lean: true }, function (err, doc) {
        if (err) {
            console.error('error, no conversation found');
        } else {
            res.json(doc);
        }
    });
}

// update a single conversation's items

// *** Currently this overrides, 
// *** look into having a function (Or multiple functions) that only edit the required fields

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
        doc.status = req.body.status;
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
module.exports = {
    createConversation,
    readAllConversations,
    readOneConversation,
    readParticipants,
    updateConversation,
    deleteConversation
};


