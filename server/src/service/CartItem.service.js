const { Product, User, CartItem, Cart } = require("../../db/models");

// class CartItemService {
//   static async getAll() {
//     return await CartItem.findAll();
//   }

//   static async getById(id) {
//     return await CartItem.findByPk(id);
//   }
// }

// module.exports = CartItemService;

class CartItemService {
  // Получить все элементы корзины
  static async getAll() {
    return await CartItem.findAll({
      include: [{ model: Cart }, { model: Product }],
    });
  }

  // Получить элемент по ID
  static async getById(id) {
    return await CartItem.findByPk(id, {
      include: [{ model: Cart }, { model: Product }],
    });
  }

  // ➕ СОЗДАТЬ новый элемент
  static async create(data) {
    return await CartItem.create(data);
  }

  // ➕ ОБНОВИТЬ количество
  static async update(id, data) {
    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) return null;

    await cartItem.update(data);
    return cartItem;
  }

  // ➕ УДАЛИТЬ элемент
  static async delete(id) {
    const cartItem = await CartItem.findByPk(id);
    if (!cartItem) return null;

    await cartItem.destroy();
    return true;
  }

  // ➕ Получить все элементы конкретной корзины
  static async getByCartId(cartId) {
    return await CartItem.findAll({
      where: { cartId },
      include: [{ model: Product }],
    });
  }
}

module.exports = CartItemService;
