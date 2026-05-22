"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Product }) {
      Favorite.belongsTo(User, { foreignKey: "userId" });
      Favorite.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  Favorite.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Favorite",
      indexes: [
        {
          unique: true,
          fields: ["userId", "productId"],
        },
      ],
    },
  );
  return Favorite;
};
