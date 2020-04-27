// import required libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// @@@@@@ move constants ?????
const NOT_FULL = 0
const FULL = 1
const ENDED = 2

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
        default: NOT_FULL
    },
    status: {
        type: Number,
        default: NOT_FULL
    },
    messagesId: {
        type: [{type: Object}]
    }
}, 
// specify a specific name for the collection that the schema will appear in
{collection: 'Conversations'});

// store schema
mongoose.model('conversations', conversationSchema);

