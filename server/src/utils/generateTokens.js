require("dotenv").config();
import { sign } from "jsonwebtoken";
import { access, refresh } from "../config/jwtConfig.js";

const { SECRET_ACCESS_TOKEN, SECRET_REFRESH_TOKEN } = process.env;

const generateTokens = (payload) => ({
  accessToken: sign(payload, SECRET_ACCESS_TOKEN, access),
  refreshToken: sign(payload, SECRET_REFRESH_TOKEN, refresh),
});

export default generateTokens;
