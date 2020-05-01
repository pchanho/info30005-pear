// Import libraries
var express = require('express');
var faqRoutes = express.Router();

// Require the FAQ controller
var faqController = require('../controllers/faqControllers');


//Create FAQ
faqRoutes.post('/create', faqController.createFaq);

//Read all FAQs
faqRoutes.get('/readAll', faqController.readAllFaqs);

//Real up to 5 FAQs
faqRoutes.get('/read5', faqController.read5Faqs);

//Read up to next 5 FAQs
faqRoutes.get('/readNext5', faqController.readNext5Faqs);

//Update
faqRoutes.post('/update', faqController.updateFaq);

//Delete
faqRoutes.post('/delete', faqController.deleteFaq);

//Search contents in FAQ
faqRoutes.get('/search/:query', faqController.searchFaq);

//Export the router
module.exports = faqRoutes;
