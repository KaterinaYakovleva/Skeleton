const express = require("express");
const CartController = require("../controllers/cartController");
const router = express.Router();

router
  .get("/all", CartController.getAllCarts)
  .get("/my", CartController.getActiveCart) //? временно
  .get("/:id", CartController.getCartById);

module.exports = router;
