'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      { 
        id: 1, 
        category: 'Pants'
      }, { 
        id: 2, 
        category: 'Shirt'
      }, { 
        id: 3,
        category: 'Shoe'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
