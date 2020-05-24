const request = require('supertest');
const app = require('../app');
const { sequelize, Category, Product } = require('../models');

describe('Products', () => {
  beforeAll(async () => {
    // Cretate all tables on the test database
    await sequelize.sync({ force: true });

    // Insert sample category data 
    await Category.bulkCreate([
      { 
        id: 1, 
        category: 'Pants'
      }, { 
        id: 2, 
        category: 'Shirt'
      }
    ]);
  });

  it('should be able to list products', async () => {
    let products = [
      {
        id_category: 1,
        description: 'Riachuelo Mens Slim Jeans'
      }, {
        id_category: 2,
        description: 'C&A Womens White T-Shirt'
      }, {
        id_category: 2,
        description: 'Adidas Mens Black T-Shirt'
      }
    ]

    products.forEach(async product => {
      await request(app).post('/products').send(product);
    })

    let response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(3);
  });

  it('should be able to show product', async () => {
    let response = await request(app).post('/products').send({
      id_category: 1,
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let product = await request(app).get(response.headers.location);
    expect(product.body).toEqual({
      id: expect.any(Number),
      description: 'Riachuelo Mens Slim Jeans',
      Category: expect.any(Object)
    });
  });

  it('should be able to create product', async () => {
    let response = await request(app).post('/products').send({
      id_category: 1,
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let id = parseInt(response.headers.location.split('/').pop());
    let product = await Product.findByPk(id);
    expect(product.dataValues).toEqual({
      id: id,
      id_category: 1,
      description: 'Riachuelo Mens Slim Jeans'
    });
  });

  it('should be able to delete a product', async () => {
    let response = await request(app).post('/products').send({
      id_category: 1,
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let id = response.headers.location.split('/').pop();
    response = await request(app).delete(response.headers.location); 
    expect(response.status).toBe(204);

    let product = await Product.findByPk(id);
    expect(product).toBeFalsy();
  });

  it('should be able to update a product', async () => {
    let response = await request(app).post('/products').send({
      id_category: 1,
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let id = parseInt(response.headers.location.split('/').pop());
    response = await request(app).put(response.headers.location).send({
      id_category: 2,
      description: 'Adidas Mens Black T-Shirt'
    }); 
    expect(response.status).toBe(204);

    let product = await Product.findByPk(id);
    expect(product.dataValues).toEqual({
      id: id,
      id_category: 2,
      description: 'Adidas Mens Black T-Shirt'
    })
  });
});