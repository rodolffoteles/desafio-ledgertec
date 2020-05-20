'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
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
      }, { 
        id: 3,
        category: 'Shoe',
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
