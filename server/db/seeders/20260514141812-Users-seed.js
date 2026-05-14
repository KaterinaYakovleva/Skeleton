"use strict";
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash("password123", 10);

    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "admin@mebel.ru",
          name: "Администратор",
          passwordHash: hashedPassword,
          role: "admin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "ivan@example.ru",
          name: "Иван Петров",
          passwordHash: hashedPassword,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "maria@example.ru",
          name: "Мария Сидорова",
          passwordHash: hashedPassword,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "alexey@example.ru",
          name: "Алексей Смирнов",
          passwordHash: hashedPassword,
          role: "user",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
