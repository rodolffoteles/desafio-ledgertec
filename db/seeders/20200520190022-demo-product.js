'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: 1, 
        categoryId: 1, 
        description: 'Riachuelo Mens Slim Jeans',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 2, 
        categoryId: 2, 
        description: 'C&A Womens White T-Shirt',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        id: 3, 
        categoryId: 3, 
        description: 'Adidas Mens Daily Sneaker',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
