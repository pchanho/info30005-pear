/*
INFO30005 Group Assignment - Pear: ConversationLanding Controller

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import libraries
//config required for cloudinary
var cloudinary = require("cloudinary");
cloudinary.config({
    cloud_name: 'drvfo389c',
    api_key: '313182327497513',
    api_secret: 'mXEiPcfHOlFtlB8eRQSAH6h6j18'
});
const mongoose = require('mongoose');
const Conversations = mongoose.model('conversations');
const Accounts = mongoose.model('accounts');
const constants = require('../constants/conversationConstants.js');
const defaultImage = "https://res.cloudinary.com/drvfo389c/image/upload/v1589655859/download_iz4jop.png"
//var Messages = mongoose.model('messages');

// create conversation
var createConversation =  async function(req, res, next) {
    console.log(req.body)
    console.log(req.files)
    //uploads a conversation image if it exists
    if (req.body.topicImage!= 'undefined') {
        await cloudinary.v2.uploader.upload(req.files.topicImage.tempFilePath, (error, result) => {
            if(result)
            {
                topicImage = result.url
            } else if(error) {
                topicImage = null
            }
        })
    }
    else{
        topicImage = defaultImage
    }
    //appends relevant fields to item
    var item = {
        topic:req.body.topic,
        category:req.body.category,
        topicImage:topicImage,
    };

    //creates a new conversation entry based on item
    var data = new Conversations(item);
    //saves entry to the database
    data.save();
    res.redirect('/');
};

// read all conversations and their items
var readAllConversations = function(req, res, next) {
    Conversations.find({}, function(err, doc) {
        if (err || doc == undefined) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};

// Read new conversations that are not full yet
var readNewConversations = function(req, res, next) {
    Conversations.find({status:constants.NOT_FULL}, function(err, doc) {
        if (err || doc == undefined) {
          console.log(err);
        } else {
          res.json(doc);
        }
      });
};

// read one conversation and it's items
var readOneConversation = function(req, res, next) {
    var id = req.body.id;
    //returns a conversation entry based on a specified Id
    Conversations.findById(id, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no conversation found');
        } else {
            res.json(doc);
        }
    });
};

// read participants
var readParticipants = function(req, res, next) {
    var id = req.body.id;
    //finds a list of participants who were involved in a conversation, specified by conversation Id
    Conversations.findById(id, 'participantsId', { lean: true }, function (err, doc) {
        if (err || doc == undefined) {
            console.error('error, no conversation found');
        } else {
            res.json(doc);
        }
    });
}

//tracks participants that enter a covnersation
//and changes the status of the conversation to active if there
//are 2 or more people in the chat
var addParticipantsInConversation = function(req, res) {
    var id = req.body.id;
    var participantsId = req.body.participantsId;
    Conversations.findById(id, function(err, doc){
        if(err || doc == undefined ){
            console.error('error, no conversation found');
        }
        else{
             //tracks the arrival of a new participant to the conversation
            doc.participantsId.addToSet(participantsId);
            doc.participantCount += 1;
            //if there are 2 or more participants in the conversation, 
            //the status is set to full
            if (doc.participantCount > 1){
                doc.status = constants.FULL
            }
            //status set to NOT_FULL if these is only 1 person
            //in the conversation
            else if (doc.participantCount == 1){
                doc.status = constants.NOT_FULL
            }
        //conversation ends when all participants leave
            else if (doc.participantCount < 1){
            doc.status = constants.ENDED
            }
            doc.save();
        }
       
        
    });

    //updates the user account record to keep track of the covnersation
    //they have joined
    Accounts.findById(participantsId, function (err, doc){
        if(err){
            console.error('error, no account found');
        }
        doc.conversationsId.addToSet(id);
        doc.save();
    });

    res.redirect('/');
}; 

//removes recorded patient from the conversation when they leave 
//and determines the status of the conversation
var removeParticipantsInConversation = async function(req, res, next) {
    var id = req.body.id;
    var participantsId = req.body.participantsId;

    Conversations.findById(id, function(err, doc){
        if(err){
            console.error('error, no conversation found');
        }
        else{
            //removes a participant from the list of 
            //recorded participants in a conversation
            doc.participantsId.pull(participantsId);
            doc.participantCount -= 1;

            //if there are 2 or more participants in the conversation, 
            //the status is set to full
            if (doc.participantCount > 1){
                doc.status = constants.FULL
            }
            //status set to NOT_FULL if these is only 1 person
            //in the conversation
            else if (doc.participantCount == 1){
                doc.status = constants.NOT_FULL
            }
            //conversation ends when all participants leave
            else if (doc.participantCount < 1){
                doc.status = constants.ENDED
            }
            doc.save();
        }
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
    readNewConversations,
    readOneConversation,
    readParticipants,
    addParticipantsInConversation,
    removeParticipantsInConversation,
    deleteConversation
};


