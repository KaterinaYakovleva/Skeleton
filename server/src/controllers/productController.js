const ProductService = require("../service/Product.service.js");
const formatResponse = require("../utils/formatResponse.js");
const isValidId = require("../utils/isValidId");
const ProductValidator = require("../utils/Product.validator.js");

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

  static async createProduct(req, res) {
    const { name, description, categoryId, stock, imageUrl, isAvailable } =
      req.body;
    const { user } = res.locals;
    const { isValid, error } = ProductValidator.validate({
      name,
      description,
      categoryId,
      stock,
      imageUrl,
      isAvailable,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const newProduct = await ProductService.create({
        name,
        description,
        categoryId,
        stock,
        imageUrl,
        isAvailable,
      });

      if (!newProduct) {
        return res
          .status(400)
          .json(formatResponse(400, "Failed to create new product"));
      }
      res.status(201).json(formatResponse(201, "success", newProduct));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async updateProduct(req, res) {
    const { id } = req.params;
    const { name, description, categoryId, stock, imageUrl, isAvailable } =
      req.body;
    const { user } = res.locals;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid product ID"));
    }

    const { isValid, error } = ProductValidator.validate({
      name,
      description,
      categoryId,
      stock,
      imageUrl,
      isAvailable,
    });
    if (!isValid) {
      return res
        .status(400)
        .json(formatResponse(400, "Validation error", null, error));
    }

    try {
      const existingProduct = await ProductService.getById(+id);

      if (!existingProduct) {
        return res.status(404).json(formatResponse(404, "Product not found"));
      }

      // if (existingProduct.author_id !== user.id) {
      //   return res
      //     .status(400)
      //     .json(
      //       formatResponse(
      //         400,
      //         "You don't have permission to update this product",
      //       ),
      //     );
      // }

      const updatedProduct = await ProductService.update(+id, {
        name,
        description,
        categoryId,
        stock,
        imageUrl,
        isAvailable,
      });
      res.status(200).json(formatResponse(200, "success", updatedProduct));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async deleteProduct(req, res) {
    const { id } = req.params;
    const { user } = res.locals;

    if (!isValidId(id)) {
      return res.status(400).json(formatResponse(400, "Invalid product ID"));
    }

    try {
      const existingProduct = await ProductService.getById(+id);

      if (!existingProduct) {
        return res.status(404).json(formatResponse(404, "Product not found"));
      }

      // if (existingProduct.author_id !== user.id) {
      //   return res
      //     .status(400)
      //     .json(
      //       formatResponse(
      //         400,
      //         "You don't have permission to delete this product",
      //       ),
      //     );
      // }

      await ProductService.delete(+id);
      res.status(200).json(formatResponse(200, "Product successfully deleted"));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = ProductController;
