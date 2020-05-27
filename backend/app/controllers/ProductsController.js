const yup = require('yup');
const { Product, Category } = require('../models');

class ProductsController {
  async index(req, res) {
    let products = await Product.findAll({
      attributes: ['id', 'description', 'id_category', 'Category.category'],
      include: { 
        model: Category,
        attributes: []
      },
      raw: true
    });
    
    return res.status(200).json(products);
  }

  async show(req, res) {
    let product = await Product.findByPk(req.params.id, {
      attributes: ['id', 'description', 'id_category', 'Category.category'],
      include: {
        model: Category,
        attributes: []
      },
      raw: true
    });
    
    if (!product){
      return res.status(404).end();
    } else {
      return res.status(200).json(product);
    }
  }
  
  async create(req, res) {
    let schema = yup.object().shape({
      category: yup.string().required(),
      description: yup.string().required()
    });

    let isValid = await schema.isValid(req.body);
    if(!isValid) {
      return res.status(400).end();
    }

    let [category, ] = await Category.findOrCreate({ 
      where: { category: req.body.category } 
    })

    let product = await Product.create({
      id_category: category.id,
      description: req.body.description
    }); 

    return res.location(`/products/${product.id}`).status(201).end();
  }

  async update(req, res) {
    let schema = yup.object().shape({
      category: yup.string().required(),
      description: yup.string().required()
    });

    let isValid = await schema.isValid(req.body);
    if(!isValid) {
      return res.status(400).end();
    }

    let product = await Product.findByPk(req.params.id);
    if (!product) {
      return res.status(404).end();
    }

    let [category, ] = await Category.findOrCreate({ 
      where: { category: req.body.category } 
    })
   
    product.update({
      id_category: category.id,
      description: req.body.description
    })
   
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