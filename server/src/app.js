const { resolve } = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const serverConfig = require("../src/config/serverConfig");
const indexRouter = require("./routes/index.routes.js");
const formatResponse = require("./utils/formatResponse.js"); 

serverConfig(app);

const PORT = process.env.PORT || 3000;

app.use("/api", indexRouter);

app.use((req, res) => {
  res
    .status(404)
    .json(formatResponse(404, `Route ${req.originalUrl} not found`));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json(formatResponse(500, "Internal server error"));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
