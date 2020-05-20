'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    description: DataTypes.TEXT
  }, { underscore: true });

  Product.associate = function(models) {
    Product.belongsTo(models.Category);
  };

  return Product;
};