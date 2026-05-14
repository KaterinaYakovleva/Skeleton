require("dotenv").config();
import { verify } from "jsonwebtoken";
import formatResponse from "../utils/formatResponse.mjs";

function verifyAccessToken(req, res, next) {
  try {
    const accessToken = req.headers.authorization.split(" ")[1];
    const { user } = verify(accessToken, process.env.SECRET_ACCESS_TOKEN);
    res.locals.user = user;
    next();
  } catch ({ message }) {
    console.log("======verifyAccessToken=======>>>>>>>", message);
    res
      .status(403)
      .json(
        formatResponse(
          403,
          "Invalid access token",
          null,
          "Invalid access token"
        )
      );
  }
}

export default verifyAccessToken;
