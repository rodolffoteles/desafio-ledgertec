'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        id: 1, 
        id_category: 1, 
        description: 'Riachuelo Mens Slim Jeans'
      }, {
        id: 2, 
        id_category: 2, 
        description: 'C&A Womens White T-Shirt'
      }, {
        id: 3, 
        id_category: 3, 
        description: 'Adidas Mens Daily Sneaker'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }
};
