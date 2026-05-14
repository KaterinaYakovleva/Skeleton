"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Carts",
      [
        {
          userId: 2, // Иван Петров
          status: "active",
          sessionId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3, // Мария Сидорова
          status: "active",
          sessionId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4, // Алексей Смирнов
          status: "active",
          sessionId: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Carts", null, {});
  },
};
