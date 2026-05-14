require("dotenv").config();
import { verify } from "jsonwebtoken";
import formatResponse from "../utils/formatResponse.js";

function verifyRefreshToken(req, res, next) {
  try {
    const { refreshToken } = req.cookies;
    const { user } = verify(refreshToken, process.env.SECRET_REFRESH_TOKEN);
    res.locals.user = user;
    next();
  } catch ({ message }) {
    console.log("======verifyRefreshToken=======>>>>>>>", message);
    res
      .status(401)
      .clearCookie("refreshToken")
      .json(
        formatResponse(
          401,
          "Invalid refresh token",
          null,
          "Invalid refresh token"
        )
      );
  }
}

export default verifyRefreshToken;
