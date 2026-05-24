const express = require("express");
const ProductController = require("../controllers/productController");
const router = express.Router();
const verifyAccessToken = require("../middleware/verifyAccessToken");

router
  .get("/all", ProductController.getAllProducts)
  .get("/:id", ProductController.getProductById)
  .post("/", ProductController.createProduct)
  .put("/:id", ProductController.updateProduct)
  .delete("/:id", ProductController.deleteProduct);

module.exports = router;
