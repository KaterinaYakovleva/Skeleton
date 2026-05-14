"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({ Category, CartItem, Favorite }) {
      Product.belongsTo(Category, { foreignKey: "categoryId" });
      Product.hasMany(CartItem, { foreignKey: "productId" });
      Product.hasMany(Favorite, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: DataTypes.TEXT,
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      imageUrl: DataTypes.STRING,
      sku: {
        type: DataTypes.STRING,
        unique: true,
      },
      isAvailable: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize,
      modelName: "Product",
    },
  );
  return Product;
};
