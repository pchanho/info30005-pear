/*
INFO30005 Group Assignment - Pear: Message Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create schema
var messageSchema = new Schema({
    conversationId: {
        type: Object,
        required: true
    },
    senderId: {
    	type: Object, 
        required: true
    },
    timeSent: {
        type: Date,
        required: true
    },
    text: {
    	type: String
    },
    image: {
        type: String
    },
    video: {
        type: String
    },

}, 

{collection: 'Messages'});

// export schema to mongoose
mongoose.model('messages', messageSchema);