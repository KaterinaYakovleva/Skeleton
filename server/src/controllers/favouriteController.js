const FavouriteService = require("../service/Favourite.service");
const formatResponse = require("../utils/formatResponse");
const isValidId = require("../utils/isValidId");

class FavouriteController {
  static async getAllFavourites(req, res) {
    try {
      const favourites = await FavouriteService.getAll();
      if (favourites.length === 0) {
        return res
          .status(200)
          .json(formatResponse(200, "Избранное не найдено", []));
      }
      res.status(200).json(formatResponse(200, "success", favourites));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async getMyFavourites(req, res) {
    try {
      const userId = 2;

      if (!userId) {
        return res
          .status(400)
          .json(formatResponse(400, "userId не передан", null));
      }

      const favourites = await FavouriteService.getByUserId(userId);
      res.status(200).json(formatResponse(200, "success", favourites));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async addToFavourites(req, res) {
    try {
      const { productId } = req.body;

      const userId = 2; // Когда появится авторизация: req.user.id

      if (!productId) {
        return res
          .status(400)
          .json(formatResponse(400, "productId обязателен", null));
      }

      if (!userId) {
        return res
          .status(401)
          .json(formatResponse(401, "Пользователь не авторизован", null));
      }

      const favorite = await FavouriteService.create(userId, productId);
      res
        .status(201)
        .json(formatResponse(201, "Добавлено в избранное", favorite));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async removeFavouriteById(req, res) {
    try {
      const { id } = req.params;

      if (!isValidId(id)) {
        return res
          .status(400)
          .json(formatResponse(400, "Некорректный id", null));
      }

      const deleted = await FavouriteService.delete(+id);

      if (!deleted) {
        return res
          .status(404)
          .json(formatResponse(404, "Элемент не найден", null));
      }

      res.status(200).json(formatResponse(200, "Удалено из избранного", null));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }

  static async removeFavouriteByProduct(req, res) {
    try {
      const { productId } = req.params;
      // Временно, пока нет авторизации
      const userId = 2; // Когда появится авторизация: req.user.id

      if (!userId) {
        return res
          .status(401)
          .json(formatResponse(401, "Пользователь не авторизован", null));
      }

      const deleted = await FavouriteService.deleteByUserAndProduct(
        userId,
        +productId,
      );

      if (!deleted) {
        return res
          .status(404)
          .json(formatResponse(404, "Элемент не найден", null));
      }

      res.status(200).json(formatResponse(200, "Удалено из избранного", null));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = FavouriteController;
