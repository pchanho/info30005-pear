/*
INFO30005 Group Assignment - Pear: FAQ Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// Import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for database
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
    // Specify a name for the collection
    {collection: 'Faqs'});

// Store FAQ schema in mongoose
mongoose.model('faqs', faqSchema);
