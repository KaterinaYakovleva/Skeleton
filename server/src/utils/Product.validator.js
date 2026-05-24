class ProductValidator {
  /**
   * Метод для валидации данных задачи.
   * @param {object} data - Объект данных задачи, который необходимо проверить.
   * @param {string} data.title - Заголовок задачи (обязательное поле).
   * @param {string} data.body - Основное содержание задачи (обязательное поле).
   * @returns {object} - Объект, содержащий результат валидации.
   * @returns {boolean} isValid - Флаг, указывающий на валидность данных.
   * @returns {string|null} error - Сообщение об ошибке валидации, если имеется, иначе null.
   */
  static validate(data) {
    const { name, description, categoryId, stock, imageUrl, isAvailable } =
      data;

    if (!name || typeof name !== "string" || name.trim() === "") {
      return {
        isValid: false,
        error: "Name is required and must be a non-empty string.",
      };
    }

    if (
      !description ||
      typeof description !== "string" ||
      description.trim() === ""
    ) {
      // Если body отсутствует, не является строкой или является пустой строкой
      return {
        isValid: false, // Данные невалидные
        error: "Description is required and must be a non-empty string.", // Возвращаем сообщение об ошибке
      };
    }
    if (
      !categoryId ||
      typeof categoryId !== "number" ||
      categoryId.trim() === "" // вопрос
    ) {
      return {
        isValid: false,
        error: "CategoryId is required and must be a non-empty string.",
      };
    }

    if (
      !isAvailable ||
      typeof isAvailable !== "boolean" ||
      isAvailable.trim() === ""
    ) {
      return {
        isValid: false,
        error: "isAvailable is required and must be a non-empty string.",
      };
    }
    if (!stock || typeof stock !== "number" || stock.trim() === "") {
      return {
        isValid: false,
        error: "Stock is required and must be a non-empty string.",
      };
    }

    if (!imageUrl || typeof imageUrl !== "string" || imageUrl.trim() === "") {
      return {
        isValid: false,
        error: "imageUrl is required and must be a non-empty string.",
      };
    }
    //* Если все проверки пройдены, возвращаем валидный результат.
    return {
      isValid: true,
      error: null,
    };
  }
}

module.exports = ProductValidator;
