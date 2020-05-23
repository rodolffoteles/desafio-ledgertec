const { Product, Category } = require('../models');

class ProductsController {
  async index(req, res) {
    let products = await Product.findAll({
      attributes: ['id', 'description'],
      include: { 
        model: Category,
        attributes: ['id', 'category']
      }
    });
    
    return res.status(200).json(products);
  }

  async show(req, res) {
    let product = await Product.findByPk(req.params.id, {
      attributes: ['id', 'description'],
      include: {
        model: Category,
        attributes: ['id', 'category']
      }
    });
    
    if (!product){
      return res.status(404).end();
    } else {
      return res.status(200).json(product);
    }
  }
  
  async create(req, res) {
    let product = await Product.create(req.body, { 
      fields: ['description', 'id_category']
    });
  
    return res.location(`/products/${product.id}`).status(201).end();
  }

  async update(req, res) {
    let product = await Product.findByPk(req.params.id);
   
    if (!product) {
      return res.status(404).end();
    }
   
    product.update(req.body, { fields: ['description', 'id_category'] })
   
    return res.status(204).end();
  }

  async destroy(req, res) {
    let product = await Product.findByPk(req.params.id);
  
    if (!product) {
      return res.status(404).end();
    }
  
    product.destroy();
  
    return res.status(204).end();
  }
}

module.exports = new ProductsController();