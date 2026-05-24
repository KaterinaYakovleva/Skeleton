const { Product, User, CartItem, Cart } = require("../../db/models");

class ProductService {
  static async getAll() {
    return await Product.findAll();
  }

  static async getById(id) {
    return await Product.findByPk(id);
  }

  static async create(data) {
    const product = await Product.create(data);
    return await this.getById(product.id);
  }

  static async update(id, data) {
    const product = await this.getById(id);
    if (!product) {
      return null;
    }
    product.name = data.name;
    product.description = data.description;
    product.categoryId = data.categoryId;
    product.stock = data.stock;
    product.imageUrl = data.imageUrl;
    product.isAvailable = data.isAvailable;
    await product.save();
    return product;
  }

  static async delete(id) {
    const product = await this.getById(id);
    if (!product) {
      return null;
    }
    await product.destroy();
    return product;
  }
}

module.exports = ProductService;
