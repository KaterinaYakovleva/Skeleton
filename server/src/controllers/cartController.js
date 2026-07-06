const CartService = require("../service/Cart.service.js");
const formatResponse = require("../utils/formatResponse.js");
const isValidId = require("../utils/isValidId");

class CartController {
  static async getAllCarts(req, res) {
    try {
      const carts = await CartService.getAll();
      if (carts.length === 0) {
        return res
          .status(200)
          .json(formatResponse(200, "Корзины не найдены", []));
      }
      res.status(200).json(formatResponse(200, "success", carts));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getCartById(req, res) {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res
        .status(400)
        .json(formatResponse(400, "Некорректный id корзины"));
    }
    try {
      const cart = await CartService.getById(+id);
      if (!cart) {
        return res
          .status(404)
          .json(formatResponse(404, `Корзины с id ${id} не найдена`));
      }
      res.status(200).json(formatResponse(200, "success", cart));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getCartTotalSum(req, res) {
    try {
      const userId = 2;
      if (!userId) {
        return res
          .status(400)
          .json(formatResponse(400, "userId не передан", null));
      }
      const cart = await CartService.getOrCreateActiveCart(userId);
      if (!cart) {
        return res
          .status(404)
          .json(formatResponse(404, "Невозможно подсчитать общую сумму"));
      }

      const totalSum = await CartService.getTotalSum(cart.id);

      res.status(200).json(formatResponse(200, "success", totalSum));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  //! временно
  static async getActiveCart(req, res) {
    try {
      const userId = 2;
      if (!userId) {
        return res
          .status(400)
          .json(formatResponse(400, "userId не передан", null));
      }
      const cart = await CartService.getOrCreateActiveCart(userId);
      if (!cart) {
        return res
          .status(404)
          .json(formatResponse(404, "Активная корзина не найдена"));
      }
      res.status(200).json(formatResponse(200, "success", cart));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = CartController;
