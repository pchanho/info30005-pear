var mongoose = require('mongoose');
var Faq = mongoose.model('faqs');

//Create
var createFaq = function(req, res, next) {
    var item = {
        title:req.body.title,
        body:req.body.body,
        updatedAt:req.body.updatedAt
    };

    var data = new Faq(item);
    data.save();

    res.redirect('/');
};


//Read all registered FAQs
var getFaq = function(req, res, next){
    Faq.find()
        .lean()
        .then(function(doc){
        res.send(doc);
    })
};

//Update
var updateFaq = function(req, res, next) {
    var id = req.body.id;

    Faq.findById(id, function(err, doc){
        if(err){
            console.error('error, no faq found');
        }
        doc.title = req.body.title;
        doc.body = req.body.body;
        doc.updatedAt = req.body.updatedAt;
        doc.save();
    });
    res.redirect('/');
};

//Delete
var deleteFaq = function(req, res, next){
    var id = req.body.id;
    Faq.findByIdAndRemove(id).exec();
    res.redirect('/');
};


//Search FAQ matching with the user input
var searchFaq = function(req, res, next) {
    var query = new RegExp(req.params.query, 'i');

    Faq.find()
        .or([{ title: { $regex: query }}, { body: { $regex: query }}])
        .exec(function(err, data) {
        res.json(data);
        });
};

//Export the controllers
module.exports = {
    createFaq,
    getFaq,
    updateFaq,
    deleteFaq,
    searchFaq
};