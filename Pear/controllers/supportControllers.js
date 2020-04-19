var mongoose = require('mongoose');
var Support = mongoose.model('supports');

//Create
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

//Read
var getSupportContents = function(req, res, next){
    Support.find()
        .lean()
        .then(function(doc) {
            res.send(doc);
        });
};

//Update
var updateSupport = function(req, res, next) {
    var id = req.body.id;

    Support.findById(id, function(err, doc){
        if(err){
            console.error('error, no support content found');
        }
        doc.title = req.body.title;
        doc.body = req.body.body;
        doc.image = req.body.image;
        doc.video = req.body.video;
        doc.save();
    });
    res.redirect('/support');
};

//Delete
var deleteSupport = function(req, res, next){
    var id = req.body.id;
    Support.findByIdAndRemove(id).exec();
    res.redirect('/support');
};

module.exports = {
    getSupportContents,
    createSupport,
    updateSupport,
    deleteSupport
};
