const express = require("express");
const router = express.Router();
const {
  getAllCarts,
  getCartById,
} = require("../controllers/cartController.js");

router.get("/", getAllCarts);
router.get("/:id", getCartById);

module.exports = router;
