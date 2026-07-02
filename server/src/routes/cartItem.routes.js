const express = require("express");
const CartItemController = require("../controllers/cartItemController");
const router = express.Router();

router
  .get("/all", CartItemController.getAllCartItem)
  .get("/:id", CartItemController.getCartItemById)
  .post("/", CartItemController.createCartItem)
  .put("/:id", CartItemController.updateCartItem)
  .delete("/:id", CartItemController.deleteCartItem);

module.exports = router;
