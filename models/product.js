'use strict';

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    description: DataTypes.TEXT
  }, {
    timestamps: false
  });

  Product.associate = function(models) {
    Product.belongsTo(models.Category, { foreignKey: 'id_category' });
  };

  return Product;
};