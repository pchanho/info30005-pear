/*
INFO30005 Group Assignment - Pear: FAQ Controller

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// Import libraries
const mongoose = require('mongoose');
const Faq = mongoose.model('faqs');

//Create FAQ
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
var readAllFaqs = function(req, res, next){
    Faq.find()
        .lean()
        .then(function(doc){
        res.send(doc);
    })
};

//Real up to 5 FAQs
var read5Faqs = function(req, res, next){
    Faq.find().limit(5)
        .lean()
        .then(function(doc){
            res.send(doc);
        })
};

//Read up to next 5 FAQs
var readNext5Faqs = function(req, res, next){
    Faq.find().skip(5).limit(5)
        .lean()
        .then(function(doc){
            res.send(doc);
        })
};

//Update FAQ
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

//Delete FAQ
var deleteFaq = function(req, res, next){
    var id = req.body.id;
    Faq.findByIdAndRemove(id).exec();
    res.redirect('/');
};


//Search FAQ matching with the user input
var searchFaq = function(req, res, next) {
    //RegExp enables partial search
    //Users don't need to type full text
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
    readAllFaqs,
    read5Faqs,
    readNext5Faqs,
    updateFaq,
    deleteFaq,
    searchFaq
};