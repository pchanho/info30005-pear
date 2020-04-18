const express = require('express');
const supportRoutes = express.Router();

const supportController = require('../controllers/supportControllers');


//read
// supportRoutes.get('/', supportController.getSupportContents());

supportRoutes.get('/', (req, res) => supportController.getSupportContents(req, res));

//update
// supportRoutes.put('/update', supportController);

// export the router
module.exports = supportRoutes;
