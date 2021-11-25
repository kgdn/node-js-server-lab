const express = require('express');
const productController = require('../controllers/productController');
const clientController = require('../controllers/clientController');
//define a router and create routes
const router = express.Router();

//routes for dynamic processing of products
//-----------------------------------------------
//route for listing all products
router.get('/api/catalog', productController.getCatalogue);
router.get("/api/article/:id", productController.getProductByID);
//route for login
router.post('/api/login', clientController.loginControl);
//route for registration
router.post('/api/register', clientController.registerControl);
//route for viewing clients as admin
router.get("/api/client", clientController.getClients);
//export router
module.exports = router;
