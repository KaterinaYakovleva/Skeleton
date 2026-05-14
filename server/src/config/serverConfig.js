const { urlencoded, json } = require("express");
const { resolve } = require("path");
const cors = require("cors");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
};

const serverConfig = (app) => {
  app
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(morgan("dev"))
    .use(cors(corsOptions))
    .use(cookieParser());
};

module.exports = serverConfig;
