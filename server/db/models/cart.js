"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, CartItem }) {
      Cart.belongsTo(User, { foreignKey: "userId" });
      Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });
    }
  }
  Cart.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("active", "ordered", "abandoned"),
        defaultValue: "active",
      },
    },
    {
      sequelize,
      modelName: "Cart",
    },
  );
  return Cart;
};
