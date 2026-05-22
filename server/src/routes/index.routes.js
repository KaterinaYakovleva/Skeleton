const router = require("express").Router();
const formatResponse = require("../utils/formatResponse.js");
const cartRoutes = require("./cart.routes.js");
const productsRoutes = require("./product.routes");

router.use("/cart", cartRoutes).use("/products", productsRoutes);

module.exports = router;
