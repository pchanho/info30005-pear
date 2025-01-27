/*
INFO30005 Group Assignment - Pear: Support Model

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// Import libraries
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
module.exports = mongoose.model('supports', supportSchema);