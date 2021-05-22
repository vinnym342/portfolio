import { Context } from "koa";

module.exports = async (
  ctx: Context,
  next: () => Promise<any>
): Promise<void> => {
  try {
    await next();
  } catch (err) {
    if (err.status >= 500) console.log("Error handler:", err);
    ctx.status = err.status || 500;
    ctx.body = {
      status: "failed",
      message: err.message || "Internal server error"
    };
  }
};
