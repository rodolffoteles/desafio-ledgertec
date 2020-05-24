const express = require('express');
const ProductsController = require('./app/controllers/ProductsController')
const router = express.Router();

// Product routes
router.get('/products/', ProductsController.index);
router.get('/products/:id', ProductsController.show);
router.post('/products/', ProductsController.create);
router.put('/products/:id', ProductsController.update);
router.delete('/products/:id', ProductsController.destroy);

module.exports = router;