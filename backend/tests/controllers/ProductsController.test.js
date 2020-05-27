const request = require('supertest');
const app = require('../../app');
const { sequelize, Category, Product } = require('../../app/models');

describe('Products', () => {
  beforeAll(async () => {
    // Cretate all tables on the test database
    await sequelize.sync({ force: true });
  });

  beforeEach(async () => {
    // Truncate all tables
    await sequelize.truncate({ force: true });
  });

  it('should be able to list products', async () => {
    let products = [
      {
        category: 'Pants',
        description: 'Riachuelo Mens Slim Jeans'
      }, {
        category: 'T-Shirts',
        description: 'C&A Womens White T-Shirt'
      }, {
        category: 'T-Shirts',
        description: 'Adidas Mens Black T-Shirt'
      }
    ];

    for (const product of products) {
      await request(app).post('/products').send(product);
    }

    let expectedProducts = products.map(product => {
      return {
        id: expect.any(Number), 
        id_category: expect.any(Number), 
        ...product
      }
    });

    let response = await request(app).get('/products');
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining(expectedProducts)
    );
  });

  it('should be able to show product', async () => {
    let response = await request(app).post('/products').send({
      category: 'Pants',
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let product = await request(app).get(response.headers.location);
    expect(product.body).toEqual({
      id: expect.any(Number),
      description: 'Riachuelo Mens Slim Jeans',
      id_category: expect.any(Number),
      category: 'Pants'
    });
  });

  it('should be able to create product', async () => {
    let response = await request(app).post('/products').send({
      category: 'Pants',
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let id = parseInt(response.headers.location.split('/').pop());
    let product = await Product.findByPk(id);
    expect(product.dataValues).toEqual({
      id: id,
      id_category: expect.any(Number),
      description: 'Riachuelo Mens Slim Jeans'
    });
  });

  it('should be able to delete a product', async () => {
    let response = await request(app).post('/products').send({
      category: 'Pants',
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
      category: 'Pants',
      description: 'Riachuelo Mens Slim Jeans'
    });
    expect(response.status).toBe(201);

    let id = parseInt(response.headers.location.split('/').pop());
    response = await request(app).put(response.headers.location).send({
      category: 'T-Shirt',
      description: 'Adidas Mens Black T-Shirt'
    }); 
    expect(response.status).toBe(204);

    let product = await Product.findByPk(id);
    expect(product.dataValues).toEqual({
      id: id,
      id_category: expect.any(Number),
      description: 'Adidas Mens Black T-Shirt'
    })
  });
});