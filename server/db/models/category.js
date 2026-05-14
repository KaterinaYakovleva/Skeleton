"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Product, Category }) {
      Category.hasMany(Product, { foreignKey: "categoryId" });
      Category.belongsTo(Category, {
        foreignKey: "parentId",
        as: "parent",
      });
      Category.hasMany(Category, {
        foreignKey: "parentId",
        as: "children",
      });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Category",
    },
  );
  return Category;
};
