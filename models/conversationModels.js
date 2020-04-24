// import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    	type:Number
    },

    // finished
}, 
// specify a specific name for the collection that the schema will appear in
{collection: 'Conversations'});

// store schema
mongoose.model('conversations', conversationSchema);

