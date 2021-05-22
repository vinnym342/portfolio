import { Context } from "koa";
import { verify as verifyJwt } from "jsonwebtoken";

export const authenticateJWT = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    const token = ctx.headers.authorization as string;
    const JWT_SECRET: string = process.env.JWT_SECRET as string;
    await verifyJwt(token, JWT_SECRET);
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = {
      status: "failed",
      message: "No jwt in Authorisation header"
    };
  }
};
