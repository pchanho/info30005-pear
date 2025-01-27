/*
INFO30005 Group Assignment - Pear: Support Controller

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// Import libraries
const mongoose = require('mongoose');
const Support = mongoose.model('supports');

//Create support content
var createSupport = function(req, res, next){
    var content ={
        title:req.body.title,
        body:req.body.body,
        image:req.body.image,
        video:req.body.video
    };

    var data = new Support(content);
    data.save();

    res.redirect('/support');
};

//Read all support contents
var readAllSupports = function(req, res, next){
    Support.find()
        .lean()
        .then(function(doc) {
            res.send(doc);
        });
};

//Read one support content
var readOneSupport = function(req, res, next) {
    var id = req.body.id;

    Support.findById(id, function(err, doc) {
        if (err || doc == undefined) {
            console.error('error, no content found');
        } else {
            res.json(doc);
        }
    });
};

//Update support content by given id
var updateSupport = function(req, res, next) {
    var id = req.body.id;

    Support.findById(id, function(err, doc){
        if (err || doc == undefined){
            console.error('error, no support content found');
        } else {
            doc.title = req.body.title;
            doc.body = req.body.body;
            doc.image = req.body.image;
            doc.video = req.body.video;
            doc.save();
        }    
    });
    res.redirect('/support');
};

//Delete support content
var deleteSupport = function(req, res, next){
    var id = req.body.id;
    Support.findByIdAndRemove(id).exec();
    res.redirect('/support');
};

// Export controllers
module.exports = {
    readAllSupports,
    readOneSupport,
    createSupport,
    updateSupport,
    deleteSupport,
};
