"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Favourites",
      [
        // Иван
        {
          userId: 2, // Иван
          productId: 12, // Модульная гостиная
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2, // Иван
          productId: 8, // Стулья Венеция
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Мария
        {
          userId: 3, // Мария
          productId: 14, // Пуф Комфорт
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3, // Мария
          productId: 7, // Стол Оливия
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3, // Мария
          productId: 15, // Полка навесная
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Алексей
        {
          userId: 4, // Алексей
          productId: 4, // Комод Аксель
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 4, // Алексей
          productId: 3, // Шкаф Прованс
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Favourites", null, {});
  },
};
