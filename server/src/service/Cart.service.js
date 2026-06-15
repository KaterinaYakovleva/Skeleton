const { Product, User, CartItem, Cart} = require("../../db/models");

class CartService {
  static async getAll() {
    return await Cart.findAll();
  }

  static async getById(id) {
    return await Cart.findByPk(id);
  }
  //* временно
  static async getActiveCart() {
    // Временно возвращаем первую активную корзину (id=1)
    return await Cart.findByPk(1, {
      include: [{ model: CartItem, include: [Product] }],
    });
  }
}

module.exports = CartService;
