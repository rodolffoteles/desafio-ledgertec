'use strict';

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    category: DataTypes.STRING
  }, { underscore: true });

  Category.associate = function(models) {
    Category.hasMany(models.Product)
  };
  
  return Category;
};