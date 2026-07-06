"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate({ User, Product }) {
      Favourite.belongsTo(User, { foreignKey: "userId" });
      Favourite.belongsTo(Product, { foreignKey: "productId" });
    }
  }
  Favourite.init(
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
      modelName: "Favourite",
      indexes: [
        {
          unique: true,
          fields: ["userId", "productId"],
        },
      ],
    },
  );
  return Favourite;
};
