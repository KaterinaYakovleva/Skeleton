const router = require("express").Router();
import formatResponse from "../utils/formatResponse.js";

// router.use("/flights", flightRoutes);
// router.use("/auth", authRoutes);

router.use("*", (req, res) => {
  res.status(404).json(formatResponse(404, "Not found"));
});

export default router;
