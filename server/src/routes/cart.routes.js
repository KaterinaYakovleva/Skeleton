const express = require("express");
const CartController = require("../controllers/cartController");
const router = express.Router();

router
  .get("/all", CartController.getAllCarts)
  .get("/my", CartController.getActiveCart) //? временно
  .get("/:id", CartController.getCartById)
  .get("/sum", CartController.getCartTotalSum);

module.exports = router;
