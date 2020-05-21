const express = require('express');
const db = require('../models');
const router = express.Router();

// Retrive a list with all products
router.get('/', async (req, res) => {
  let products = await db.Product.findAll({ include: db.Category });
  
  return res.status(200).json(products);
});

// Retrive a specific product
router.get('/:id', async (req, res) => {
  let product = await db.Product.findByPk(req.params.id, { include: db.Category });
  
  if (!product){
    return res.status(404).end();
  } else {
    return res.status(200).json(product);
  }
});

// Create a new product
router.post('/', async (req, res) => {
  let product = await db.Product.create(req.body, { fields: ['description', 'categoryId'] });

  return res.location(`/products/${product.id}`).status(201).end();
});

// Update a product
router.put('/:id', async (req, res) => {
 let product = await db.Product.findByPk(req.params.id);

 if (!product) {
   return res.status(404).end();
 }

 product.update(req.body, { fields: ['description', 'categoryId'] })

 return res.status(204).end();
});

// Delete one product
router.delete('/:id', async (req, res) => {
  let product = await db.Product.findByPk(req.params.id);

  if (!product) {
    return res.status(404).end();
  }

  product.destroy();

  return res.status(204).end();
});

module.exports = router;