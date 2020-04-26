// Import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create schema
var faqSchema = new Schema({
        title: {
            type:String,
            required:true
        },

        body: {
            type:String,
            required:true
        },

        updatedAt: {
            type:Date,
            required:true
        },
    },
    {collection: 'Faqs'});

// Store schema
mongoose.model('faqs', faqSchema);
