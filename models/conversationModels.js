// import required libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var constants = require('../constants/conversationConstants.js');

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
    	type:Date
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


