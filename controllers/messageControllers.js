// import libraries
var mongoose = require('mongoose');
var Messages = mongoose.model('messages');
//var Messages = mongoose.model('messages');

// create message
var createMessage = function(req, res, next) {
    var item = {
        conversationId:req.body.conversationId,
        sender:req.body.sender,
        sentAt:req.body.sentAt,
        text:req.body.text,
        image:req.body.image,
        video:req.body.video,

    };

    var data = new Messages(item);
    data.save();

    res.redirect('/');
};

// read all messages
var readAllMessages = function(req, res, next) {
    Messages.find({}, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};

// read all messages from a particular conversation 
// (for user history and admin purposes)
var readSpecificMessages = function(req, res, next) {
    var conversationId = req.body.conversationId;

    Messages.find({ "conversationId" : conversationId }, function(err,doc){
        if (err) {
            console.log(err);
          } 
          else{
            res.json(doc);
          }
    })
  
    res.redirect('/');

// provide conversationId
// returns all messages associated with praticular conversationId

};

// read one message
var readOneMessage = function(req, res, next) {
    var id = req.body.id;

    Messages.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no conversation found');
        } else {
            res.json(doc);
        }
    });
};

// update message
// not accessible to user (admin use only i.e. censoring)

var updateMessage = function(req, res, next) {
    var id = req.body.id;

    Messages.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no conversation found');
        }
        doc.conversationId = req.body.conversationId;
        doc.sender = req.body.sender;
        doc.sentAt = req.body.sentAt;
        doc.text = req.body.text;
        doc.image = req.body.image;
        doc.video = req.body.video;
        doc.save();
    });
    res.redirect('/');
};

// delete message by id
// not accessible to user (admin use only i.e. deleting old messages)
var deleteMessage = function(req, res, next) {
    var id = req.body.id;
    Messages.findByIdAndRemove(id).exec();
    res.redirect('/');
};

// export functions
module.exports = {
    createMessage,
    readAllMessages,
    readSpecificMessages,
    readOneMessage,
    updateMessage,
    deleteMessage
};
// ADD OTHER FUNCTIONS