import { Context } from "koa";
import Router from "koa-router";
import { TokenData } from "../../interfaces/auth";
const jwt = require("jsonwebtoken");

const router = new Router();

function generateAccessToken(tokenData: TokenData) {
  return jwt.sign(tokenData, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });
}

router.post("/", async (ctx: Context) => {
  const newTokenData: TokenData = {
    lastUse: null,
    created: Date.now()
  };

  const newToken = generateAccessToken(newTokenData);

  // const refreshToken = jwt.sign({}, process.env.JWT_SECRET);
  ctx.status = 201;
  ctx.body = {
    token: newToken
  };
});

export default router.routes();
