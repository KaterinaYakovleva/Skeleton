const { Product, User, CartItem, Cart } = require("../../db/models");

class CartService {
  static async getAll() {
    return await Cart.findAll();
  }

  static async getById(id) {
    return await Cart.findByPk(id, {
      include: [
        {
          model: CartItem,
          as: "items",
          include: [Product],
        },
      ],
    });
  }

  static async getOrCreateActiveCart(userId) {
    if (!userId) {
      throw new Error("userId обязателен");
    }
    let cart = await Cart.findOne({
      where: {
        userId,
        status: "active",
      },
      include: [
        {
          model: CartItem,
          as: "items",
          include: [Product],
        },
      ],
    });

    if (!cart) {
      cart = await Cart.create({
        userId,
        status: "active",
      });
    }

    return cart;
  }

  static async getCartWithItems(cartId) {
    return await Cart.findByPk(cartId, {
      include: [
        {
          model: CartItem,
          as: "items",
          include: [Product],
        },
      ],
    });
  }
}

module.exports = CartService;
