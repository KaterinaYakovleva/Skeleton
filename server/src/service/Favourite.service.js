const { Favourite, Product } = require("../../db/models");

class FavouriteService {
  static async getAll() {
    return await Favourite.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
  }

  static async getByUserId(userId) {
    return await Favourite.findAll({
      where: { userId },
      include: [
        {
          model: Product,
        },
      ],
    });
  }

  static async getById(id) {
    return await Favourite.findByPk(id, {
      include: [
        {
          model: Product,
        },
      ],
    });
  }

  static async findByUserAndProduct(userId, productId) {
    return await Favourite.findOne({
      where: {
        userId,
        productId,
      },
    });
  }

  static async create(userId, productId) {
    const existing = await this.findByUserAndProduct(userId, productId);
    if (existing) {
      return existing;
    }

    return await Favourite.create({
      userId,
      productId,
    });
  }

  static async delete(id) {
    const favourite = await this.getById(id);
    if (!favourite) {
      return null;
    }
    await favourite.destroy();
    return favourite;
  }

  static async deleteByUserAndProduct(userId, productId) {
    const favourite = await this.findByUserAndProduct(userId, productId);
    if (!favourite) {
      return null;
    }
    await favourite.destroy();
    return favourite;
  }
}

module.exports = FavouriteService;
