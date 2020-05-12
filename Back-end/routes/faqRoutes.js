/*
INFO30005 Group Assignment - Pear: FAQ Router

Authors: Glenn Deevesh Chanho Gemma Dimitri
*/

// Import libraries
const express = require('express');
const faqRoutes = express.Router();

// Require the FAQ controller
const faqController = require('../controllers/faqControllers');


//CREATE

/*  route creates an FAQ expecting parameters; title, body, updatedAt
    url: ../faq/create
 */
faqRoutes.post('/create', faqController.createFaq);

//READ

/*  route returns all FAQ (take no parameters)
    url: ../faq/readAll
 */
faqRoutes.get('/readAll', faqController.readAllFaqs);

/*  route returns up to 5 FAQs(take no parameters)
    url: ../faq/read5
 */
faqRoutes.get('/read5', faqController.read5Faqs);

/*  route returns up to next 5 FAQs(take no parameters)
    url: ../faq/readNext5
 */
faqRoutes.get('/readNext5', faqController.readNext5Faqs);

//UPDATE

/*  route updates title, body, undatedAt of FAQ
    specified by faq id
    url: ../faq/update
 */
faqRoutes.post('/update', faqController.updateFaq);

//DELETE

/*  route removes a FAQ specified by faq id from the database
    url: ../faq/delete
 */
faqRoutes.delete('/delete', faqController.deleteFaq);

//SEARCH

/* route allows users to query for FAQ that we store in a database(partial search)
    url:../faq/search/[user input]
 */
faqRoutes.get('/search/:query', faqController.searchFaq);

//Export the router
module.exports = faqRoutes;
