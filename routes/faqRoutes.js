var express = require('express');
var faqRoutes = express.Router();

var faqController = require('../controllers/faqControllers');

//Read all FAQs
faqRoutes.get('/read', faqController.getFaq);

//Search contents in FAQ
faqRoutes.get('/search/:query', faqController.searchFaq);

//Export the router
module.exports = faqRoutes;
