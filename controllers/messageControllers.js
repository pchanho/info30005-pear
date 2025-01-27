/*
INFO30005 Group Assignment - Pear: Message Controllers

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import libraries
const mongoose = require('mongoose');
const Messages = mongoose.model('messages');
const Conversations = mongoose.model('conversations');

// create message
var createMessage = function(req, res, next) {
    //creates an item with the appropriate fields for a message
    console.log(req.body)
    var item = {
        conversationId:req.body.conversationId,
        senderId:req.body.senderId,
        text:req.body.text,
        image:req.body.image,
        video:req.body.video,
    };
    //saves the item as a message in the database
    var data = new Messages(item);
    data.save((err, message) => {   
        
        //updates conversation with a record of the newly created messageId
        var conversationId = req.body.conversationId
        Conversations.findById(conversationId, function (err, doc){
            if(err){
                console.error('error, no message found');
            }
            else{
                doc.messagesId.addToSet(message._id);
                doc.save();
            }
        });
      
    });
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
        if (err || doc == undefined) {
            
            console.log("error, no messages found");
        } 
        else{
            res.json(doc);
        }
    });
   
};

// read one message
var readOneMessage = function(req, res, next) {
    var id = req.body.id;

    Messages.findById(id, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no message found');
        } else {
            res.json(doc);
        }
    });
};

// update message
// not accessible to user (admin use only i.e. censoring)
var updateMedia = function(req, res, next) {
    var id = req.body.id;

    Messages.findById(id, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no message found');
        }
        else{
            if (typeof(req.body.text) != "undefined"){
                doc.text = req.body.text;
            }
            if (typeof(req.body.text) != "undefined"){
                doc.image = req.body.image;
            }
            if (typeof(req.body.text) != "undefined"){
                doc.video = req.body.video;
            }            
            doc.save();
        } 
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
    updateMedia,
    deleteMessage
};