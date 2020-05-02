/*
INFO30005 Group Assignment

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// Import libraries
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Creating schema for database
var supportSchema = new Schema({
        title: {
            type:String,
            required:true
        },

        body: {
            type:String,
            required:true
        },

        image: {
            type:String
        },

        video: {
            type:String
        },
    },
    // Specify a name for the collection
    {collection: 'Supports'});

// Store Support schema in mongoose
mongoose.model('supports', supportSchema);
