"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Корпусная мебель",
          parentId: null,
          description: "Шкафы, комоды, стенки, модульные системы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Мягкая мебель",
          parentId: null,
          description: "Диваны, кресла, пуфы, банкетки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Спальня",
          parentId: null,
          description:
            "Кровати, матрасы, прикроватные тумбы, туалетные столики",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Столы и стулья",
          parentId: null,
          description:
            "Обеденные группы, письменные столы, компьютерные кресла",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Хранение",
          parentId: 1, // Корпусная мебель
          description: "Шкафы-купе, комоды, витрины, этажерки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Гостиная",
          parentId: 2, // Мягкая мебель
          description: "Угловые диваны, модульные диваны, кресла-кровати",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Матрасы",
          parentId: 3, // Спальня
          description: "Ортопедические матрасы, беспружинные матрасы",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Офисная мебель",
          parentId: null,
          description: "Компьютерные столы, кресла для офиса, стеллажи",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Детская мебель",
          parentId: null,
          description: "Кроватки, письменные столы, шкафы для детей",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Модульные системы",
          parentId: 1, // Корпусная мебель
          description: "Модульные гостиные, стенки, системы хранения",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
