const express = require("express");
const FavouriteController = require("../controllers/favouriteController");
const router = express.Router();

router
  .get("/all", FavouriteController.getAllFavourites)
  .get("/my", FavouriteController.getMyFavourites)
  .post("/", FavouriteController.addToFavourites)
  .delete("/:id", FavouriteController.removeFavouriteById)
  .delete("/product/:productId", FavouriteController.removeFavouriteByProduct);

module.exports = router;
