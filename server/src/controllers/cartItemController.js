const formatResponse = require("../utils/formatResponse.js");
const CartItemService = require("../service/CartItem.service.js");
const ProductService = require("../service/Product.service.js");
const CartService = require("../service/Cart.service.js");

class CartItemController {
  static async getAllCartItem(req, res) {
    try {
      const allCartsItem = await CartItemService.getAll();
      if (allCartsItem.length === 0) {
        return res.status(200).json(formatResponse(200, "Корзина пуста", []));
      }
      res.status(200).json(formatResponse(200, "success", allCartsItem));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
  static async getCartItemById(req, res) {
    try {
      const { id } = req.params;
      const cartItem = await CartItemService.getById(id);

      if (!cartItem) {
        return res
          .status(404)
          .json(formatResponse(404, "Элемент корзины не найден", null));
      }

      res.status(200).json(formatResponse(200, "success", cartItem));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async createCartItem(req, res) {
    try {
      const { cartId, productId, quantity } = req.body;
      // const userId = req.user;

      if (!cartId || !productId || !quantity) {
        return res
          .status(400)
          .json(formatResponse(400, "Не хватает данных", null));
      }

      // if (!userId) {
      //   return res
      //     .status(401)
      //     .json(formatResponse(401, "Пользователь не авторизован", null));
      // }

      const product = await ProductService.getById(productId);
      if (!product) {
        return res
          .status(404)
          .json(formatResponse(404, "Товар не найден", null));
      }

      const price = product.price;

      // ✅ Проверяем, существует ли корзина
      const cart = await CartService.getById(cartId);
      if (!cart) {
        return res
          .status(404)
          .json(formatResponse(404, "Корзина не найдена", null));
      }

      const newCartItem = await CartItemService.create({
        cartId,
        productId,
        quantity,
        price,
      });

      const updatedCart = await CartService.getCartWithItems(cartId);

      res
        .status(201)
        .json(formatResponse(201, "Товар добавлен в корзину", updatedCart));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async updateCartItem(req, res) {
    try {
      const { id } = req.params;
      const { quantity } = req.body;

      if (!quantity || quantity < 1) {
        return res
          .status(400)
          .json(formatResponse(400, "Количество должно быть больше 0", null));
      }

      const updated = await CartItemService.update(id, { quantity });

      if (!updated) {
        return res
          .status(404)
          .json(formatResponse(404, "Элемент корзины не найден", null));
      }

      const cartItem = await CartItemService.getById(id);
      const updatedCart = await CartService.getCartWithItems(cartItem.cartId);

      res
        .status(200)
        .json(formatResponse(200, "Количество обновлено", updatedCart));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteCartItem(req, res) {
    try {
      const { id } = req.params;

      const cartItem = await CartItemService.getById(id);
      if (!cartItem) {
        return res
          .status(404)
          .json(formatResponse(404, "Элемент корзины не найден", null));
      }

      const cartId = cartItem.cartId;
      await CartItemService.delete(id);

      const updatedCart = await CartService.getCartWithItems(cartId);

      res
        .status(200)
        .json(formatResponse(200, "Элемент удален из корзины", updatedCart));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = CartItemController;
