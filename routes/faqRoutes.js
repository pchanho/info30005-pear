var express = require('express');
var faqRoutes = express.Router();

var faqController = require('../controllers/faqControllers');


//Create FAQ
faqRoutes.post('/create', faqController.createFaq);

//Read all FAQs
faqRoutes.get('/read', faqController.getFaq);

//Update
faqRoutes.post('/update', faqController.updateFaq);

//Delete
faqRoutes.post('/delete', faqController.deleteFaq);

//Search contents in FAQ
faqRoutes.get('/search/:query', faqController.searchFaq);

//Export the router
module.exports = faqRoutes;
