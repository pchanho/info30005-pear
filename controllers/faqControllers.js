var mongoose = require('mongoose');
var Faq = mongoose.model('faqs');

//Read all registered FAQs
var getFaq = function(req, res, next){
    Faq.find()
        .lean()
        .then(function(doc){
        res.send(doc);
    })
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
    getFaq,
    searchFaq
};