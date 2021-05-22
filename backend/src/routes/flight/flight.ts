import { Context } from "koa";
import Router from "koa-router";
import { TokenData } from "../../interfaces/auth";
const jwt = require("jsonwebtoken");

const router = new Router();

router.get("/", async (ctx: Context) => {
  ctx.status = 201;
  ctx.body = {
    token: "yupppp"
  };
});

export default router.routes();
