"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: 'Диван "Монро" угловой',
          description:
            'Угловой диван с механизмом "еврокнижка", ткань велюр, наполнитель ППУ, цвет - бежевый. Спальное место 160x200 см.',
          price: 45990.0,
          categoryId: 6,
          stock: 15,
          imageUrl: "/furniture/Images.jpg",
          sku: "SOFA-MONRO-001",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Кресло "Эрнест"',
          description:
            "Кресло для отдыха с высокой спинкой, механизм качания, экокожа, цвет - коричневый",
          price: 18990.0,
          categoryId: 6, // Гостиная
          stock: 25,
          imageUrl: "/furniture/image_2.jpg",
          sku: "CHAIR-ERNEST-002",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Шкаф-купе "Прованс"',
          description:
            "Трехдверный шкаф-купе с зеркалами, система хранения с полками и штангой, ЛДСП, цвет - дуб сонома",
          price: 38990.0,
          categoryId: 5, // Хранение
          stock: 10,
          imageUrl: "/furniture/image_1.jpg",
          sku: "WARD-PROV-003",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Комод "Аксель"',
          description:
            "Комод с 4 выдвижными ящиками, фасады с фрезеровкой, ЛДСП, цвет - венге",
          price: 15990.0,
          categoryId: 5, // Хранение
          stock: 20,
          imageUrl: "/furniture/image_4.jpg",
          sku: "CHEST-AXEL-004",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Спальня
        {
          name: 'Кровать "Невада" двуспальная',
          description:
            "Кровать с подъемным механизмом, ортопедическое основание, массив сосны, размер 160x200 см",
          price: 27990.0,
          categoryId: 3, // Спальня
          stock: 12,
          imageUrl: "/furniture/image_1.jpg",
          sku: "BED-NEVADA-005",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Матрас "Ортомакс" пружинный',
          description:
            "Пружинный матрас с независимыми пружинами, наполнитель - кокосовая койра и латекс, жесткость - средняя",
          price: 15990.0,
          categoryId: 7, // Матрасы
          stock: 30,
          imageUrl: "/furniture/Images.jpg",
          sku: "MAT-ORTO-006",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Столы и стулья
        {
          name: 'Стол обеденный "Оливия"',
          description:
            "Раздвижной обеденный стол на 6-8 персон, столешница из массива дуба, ножки металлические",
          price: 24990.0,
          categoryId: 4, // Столы и стулья
          stock: 18,
          imageUrl: "/furniture/image_2.jpg",
          sku: "TABLE-OLIV-007",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Стул "Венеция" (набор 4 шт)',
          description:
            "Обеденные стулья с мягким сиденьем, ткань рогожка, каркас из бука, цвет - орех",
          price: 17990.0,
          categoryId: 4, // Столы и стулья
          stock: 40,
          imageUrl: "/furniture/image_1.jpg",
          sku: "CHAIR-VEN-008",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Офисная мебель
        {
          name: 'Кресло компьютерное "Директор"',
          description:
            "Офисное кресло с высокой спинкой, подлокотниками, регулировкой высоты, экокожа",
          price: 12990.0,
          categoryId: 8, // Офисная мебель
          stock: 25,
          imageUrl: "/furniture/image_4.jpg",
          sku: "OFF-CHAIR-009",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Стол компьютерный "Геймер"',
          description:
            "Компьютерный стол с подставкой под монитор, металлическими ножками, полкой для системного блока",
          price: 11990.0,
          categoryId: 8, // Офисная мебель
          stock: 22,
          imageUrl: "/furniture/Images.jpg",
          sku: "DESK-GAMER-010",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Детская мебель
        {
          name: 'Кроватка детская "Сказка"',
          description:
            "Детская кроватка с маятниковым механизмом, регулировкой дна, съемными бортиками, березовая фанера",
          price: 12990.0,
          categoryId: 9, // Детская мебель
          stock: 20,
          imageUrl: "/furniture/image_1.jpg",
          sku: "BABY-BED-011",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Модульные системы
        {
          name: 'Модульная гостиная "Стокгольм"',
          description:
            "Модульная стенка для гостиной: шкафы, полки, витрина, тумба под ТВ. ЛДСП, цвет - венге/дуб",
          price: 58990.0,
          categoryId: 10, // Модульные системы
          stock: 8,
          imageUrl: "/furniture/image_2.jpg",
          sku: "MOD-WALL-012",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // Дополнительные позиции
        {
          name: 'Прикроватная тумба "Норд"',
          description:
            "Тумба прикроватная с одним ящиком и открытой полкой, ЛДСП, цвет - белый",
          price: 4990.0,
          categoryId: 3, // Спальня
          stock: 35,
          imageUrl: "/furniture/Images.jpg",
          sku: "STAND-NORD-013",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Пуф мягкий "Комфорт"',
          description:
            "Мягкий пуф с искусственной кожей, наполнитель - пенополиуретан",
          price: 3990.0,
          categoryId: 2, // Мягкая мебель
          stock: 45,
          imageUrl: "/furniture/image_1.jpg",
          sku: "PUF-COMF-014",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Полка навесная "Эко"',
          description:
            "Навесная полка из натурального дерева, 3 секции, цвет - венге",
          price: 2990.0,
          categoryId: 5, // Хранение
          stock: 50,
          imageUrl: "/furniture/image_2.jpg",
          sku: "SHELF-ECO-015",
          isAvailable: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
