const ProductService = require("../service/Product.service.js");
const formatResponse = require("../utils/formatResponse.js");
const isValidId = require("../utils/isValidId");

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const carts = await ProductService.getAll();
      if (carts.length === 0) {
        return res
          .status(200)
          .json(formatResponse(200, "Товары не найдены", []));
      }
      res.status(200).json(formatResponse(200, "success", carts));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getProductById(req, res) {
    const { id } = req.params;
    if (!isValidId(id)) {
      return res
        .status(400)
        .json(formatResponse(400, "Некорректный id товара"));
    }
    try {
      const cart = await ProductService.getById(+id);
      if (!cart) {
        return res
          .status(404)
          .json(formatResponse(404, `Товар с id ${id} не найден`));
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

const getAllProducts = ProductController.getAllProducts;
const getProductById = ProductController.getProductById;
module.exports = ProductController;
