const { resolve } = require("path");
const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const serverConfig = require("../src/config/serverConfig");

serverConfig(app);

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
