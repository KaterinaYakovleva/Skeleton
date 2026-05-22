const { Product, User, CartItem, Cart } = require("../../db/models");

class ProductService {
  static async getAll() {
    return await Product.findAll();
  }

  static async getById(id) {
    return await Product.findByPk(id);
  }
}

module.exports = ProductService;
