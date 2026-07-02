const router = require("express").Router();
const formatResponse = require("../utils/formatResponse.js");
const cartRoutes = require("./cart.routes.js");
const productsRoutes = require("./product.routes");
const cartItemRoutes = require("./cartItem.routes.js");

router
  .use("/cart", cartRoutes)
  .use("/product", productsRoutes)
  .use("/cart-item", cartItemRoutes);

module.exports = router;
