const { Product, User, CartItem, Cart} = require("../../db/models");

class CartService {
  static async getAll() {
    return await Cart.findAll();
  }

  static async getById(id) {
    return await Cart.findByPk(id);
  }
}

module.exports = CartService;
