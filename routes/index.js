const express = require('express');
const db = require('../models');
const router = express.Router();

// Retrive a list with all products
router.get('/', async (req, res) => {
  let products = await db.Product.findAll();
  
  return res.status(200).json(products, { include: db.Category });
});

// Retrive a specific product
router.get('/:id', async (req, res) => {
  let product = await db.Product.findByPk(req.params.id, { include: db.Category });
  
  return res.status(200).json(product);
});

// Create a new product
router.post('/', async (req, res) => {
  await db.Product.create(req.body, { fields: ['description', 'categoryId'] });

  return res.status(201).end();
});

// Update a product
router.put('/', async (req, res) => {
 // TO DO: Implement update route
});

// Delete one product
router.delete('/', async (req, res) => {
  // TO DO: Implement delete route
});

module.exports = router;