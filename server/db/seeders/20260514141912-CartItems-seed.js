"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "CartItems",
      [
        // Корзина Ивана (покупает гостиную)
        {
          cartId: 1,
          productId: 1, // Диван Монро
          quantity: 1,
          price: 45990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cartId: 1,
          productId: 2, // Кресло Эрнест
          quantity: 2,
          price: 18990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Корзина Марии (покупает спальню)
        {
          cartId: 2,
          productId: 5, // Кровать Невада
          quantity: 1,
          price: 27990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cartId: 2,
          productId: 6, // Матрас Ортомакс
          quantity: 1,
          price: 15990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cartId: 2,
          productId: 13, // Прикроватная тумба
          quantity: 2,
          price: 4990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        // Корзина Алексея (покупает офис и детскую)
        {
          cartId: 3,
          productId: 9, // Кресло Директор
          quantity: 1,
          price: 12990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cartId: 3,
          productId: 10, // Стол Геймер
          quantity: 1,
          price: 11990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cartId: 3,
          productId: 11, // Кроватка детская
          quantity: 1,
          price: 12990.0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CartItems", null, {});
  },
};
