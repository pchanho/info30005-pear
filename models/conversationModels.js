/*
INFO30005 Group Assignment - Pear: ConversationLanding Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import required libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const constants = require('../constants/conversationConstants.js');

// create the conversation schema
var conversationSchema = new Schema({
    topic: {
    	type: String, 
    	required: true
    },
    category: {
        type: String
    },
    topicImage: {
    	type: String
    },
    participantsId: {
    	type: [{type: Object}]
    },
    startTime: {
        type:Date,
        default: Date.now
    },
    participantCount: {
        type: Number,
        default: constants.NOT_FULL
    },
    status: {
        type: Number,
        default: constants.NOT_FULL
    },
    messagesId: {
        type: [{type: Object}]
    }
}, 
// specify a specific name for the collection that the schema will appear in
{collection: 'Conversations'});

// store conversation schema in mongoose
mongoose.model('conversations', conversationSchema);


