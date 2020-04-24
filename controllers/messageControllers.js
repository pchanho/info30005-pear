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

// read all messages from a particular conversation 
// (for user history and admin purposes)

// read one message

// update message

// delete message

// export functions
module.exports.createMessage = createMessage;

// ADD OTHER FUNCTIONS