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
        message:req.body.message,
        mediaAttached:req.body.mediaAttached,
        media:req.body.media,

    };

    var data = new Messages(item);
    data.save();

    res.redirect('/');
};

// read all messages
var readAllMessages = function(req, res, next) {

};

// read all messages from a particular conversation 
// (for user history and admin purposes)
var readSpecificMessages = function(req, res, next) {

};

// read one message
var readOneMessage = function(req, res, next) {

};

// update message
var updateMessage = function(req, res, next) {
    var id = req.body.id;

    Messages.findById(id, function(err, doc) {
        if (err) {
            console.error('error, no conversation found');
        }
        doc.conversationId = req.body.conversationId;
        doc.sender = req.body.sender;
        doc.sentAt = req.body.sentAt;
        doc.message = req.body.message;
        doc.mediaAttached = req.body.mediaAttached;
        doc.media = req.body.media;
        doc.save();
    });
    res.redirect('/');
};

// delete message by id
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