const request = require('supertest');
const app = require('../app');
const db = require('../models');

describe('Products', () => {
  beforeAll(async () => {
    // Cretate all tables on the test database
    await db.sequelize.sync({ force: true });

    // Insert sample category data 
    await db.Category.bulkCreate([
        { 
          id: 1, 
          category: 'Pants',
          createdAt: new Date(),
          updatedAt: new Date() 
        }, { 
          id: 2, 
          category: 'Shirt', 
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]);
  });

  test('should be able to list products', async () => {
    let firstPost = await request(app).post('/products').send({
      categoryId: 1,
      description: 'Riachuelo Mens Slim Jeans'
    });

    let secondPost = request(app).post('/products').send({
      categoryId: 2,
      description: 'C&A Womens White T-Shirt'
    });

    let thirdPost = request(app).post('/products').send({
      categoryId: 2,
      description: 'Adidas Mens Black T-Shirt'
    });

    await Promise.all([firstPost, secondPost, thirdPost]);

    let response = await request(app).get('/products');

    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(3);
  });
});