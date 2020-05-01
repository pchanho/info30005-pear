
// import libraries
var mongoose = require('mongoose');
var Conversations = mongoose.model('conversations');
var constants = require('../constants.js');
//var Messages = mongoose.model('messages');

// create conversation
var createConversation = function(req, res, next) {
    var item = {
        topic:req.body.topic,
        category:req.body.category,
        topicImage:req.body.topicImage,
        participantsId:req.body.participantsId,
        startTime:req.body.startTime,
        status:req.body.status,
        messagesId:req.body.messagesId,
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

// read all conversations where:
// status = NOT_FULL = 0
var readNewConversations = function(req, res, next) {
    Conversations.find({status:constants.NOT_FULL}, function(err, doc) {
        if (err) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};

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

    Conversations.findById(id, 'participantsId', { lean: true }, function (err, doc) {
        if (err) {
            console.error('error, no conversation found');
        } else {
            res.json(doc);
        }
    });
}

// *** Currently this overrides, 
// *** look into having a function (Or multiple functions) that only edit the required fields

// key events which occur:

// * person joins / leaves
// updateParticipantsInConversation
// (potentially a separate function for add and remove) 

// * message sent
// updateMessagesInConversation

// * updating / changing image???

//adds recorded patient to the conversation when they join and increases the status count
var addParticipantsInConversation = function(req, res) {
    var id = req.body.id;
    var participantsId = req.body.participantsId;

    Conversations.findById(id, function(err, doc){
        if(err){
            console.error('error, no conversation found');
        }
        doc.participantsId.addToSet(participantsId);
        doc.participantCount += 1;
        if (doc.participantCount > 1){
            doc.status = 1
        }
        else{
            doc.status  = 0
        }
        doc.save();
    });
    res.redirect('/');
}; 

//removes recorded patient from the conversation when they leave and decreases the status count
var removeParticipantsInConversation = async function(req, res, next) {
    var id = req.body.id;
    var participantsId = req.body.participantsId;

    Conversations.findById(id, function(err, doc){
        if(err){
            console.error('error, no conversation found');
        }
        console.log(participantsId)
        doc.participantsId.pull(participantsId[0]);
        doc.participantCount -= 1;

        if (doc.participantCount > 1){
            doc.status = 1
        }
        else{
            doc.status  = 0
        }
        doc.save();
    });
    res.redirect('/');
};

//updates a record of messageIds to keep track of
var updateMessagesInConversation = async function(req, res, next) {
    var id = req.body.id;
    var messagesId = req.body.messagesId;

    await Conversations.updateOne({ "_id" : id }, {$push: { "messagesId" : messagesId } }, function(err,doc){
        if (err) {
            console.log(err);
          } 
    }).exec()
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
    readNewConversations,
    readOneConversation,
    readParticipants,
    addParticipantsInConversation,
    removeParticipantsInConversation,
    updateMessagesInConversation,
    deleteConversation
};


