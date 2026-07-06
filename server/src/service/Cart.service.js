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
      return {
        ...cart.toJSON(),
        items: [],
        total: 0,
      };
    }

    const cartData = cart.toJSON();
    cartData.total = cartData.items.reduce((sum, item) => {
      return sum + Number(item.price) * Number(item.quantity);
    }, 0);

    return cartData;
  }

  static async getCartWithItems(cartId) {
    const cart = await Cart.findByPk(cartId, {
      include: [
        {
          model: CartItem,
          as: "items",
          include: [Product],
        },
      ],
    });

    if (!cart) {
      return null;
    }

    const cartData = cart.toJSON();
    cartData.total = cartData.items.reduce((sum, item) => {
      return sum + Number(item.price) * Number(item.quantity);
    }, 0);

    return cartData;
  }

  static async getTotalSum(cartId) {
    const cart = await Cart.findByPk(cartId, {
      include: [
        {
          model: CartItem,
          as: "items",
          include: [Product],
        },
      ],
    });

    if (!cart) {
      return 0;
    }

    const total = cart.items.reduce((sum, item) => {
      return sum + Number(item.price) * Number(item.quantity);
    }, 0);

    return total;
  }
}

module.exports = CartService;
