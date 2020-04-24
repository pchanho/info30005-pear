// import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const NOT_FULL = 0
const FULL = 1
const ENDED = 2

// create schema
var conversationSchema = new Schema({
    topic: {
    	type: String, 
    	required: true
    },
    topicImage: {
    	type: String
    },
    participants: {
    	type: [{type: String}]
    },
    startTime: {
    	type:Date
    },
    status: {
        type: Number,
        default: NOT_FULL
    }
}, 
// specify a specific name for the collection that the schema will appear in
{collection: 'Conversations'});

// store schema
mongoose.model('conversations', conversationSchema);

