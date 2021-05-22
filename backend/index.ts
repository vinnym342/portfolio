import Koa from "koa";
import koaHelmet from "koa-helmet";
import json from "koa-json";
import cors from "koa-cors";
import bodyParser from "koa-bodyparser";
import dotenv from "dotenv";
import apiRouters from "./src/routes";
import serverConfig from "./config/server";

dotenv.config();

const port = serverConfig.port;

const app = new Koa();

// Middlewares
app.use(json());
app.use(bodyParser());

if (process.env.ENVIRONMENT === "local") {
  app.use(
    cors({
      credentials: true
    })
  );
}

app.use(async (ctx, next) => {
  if (ctx.method !== "GET" && ctx.method !== "POST") {
    ctx.throw(405);
  }

  await next();
});

app.use(koaHelmet());

app.proxy = true;

// // Logging middleware
// app.use(transactionMiddleware);
// app.use(loggerMiddleware);

// Authentication Middleware
// app.use(authenticator);

// Routes
app.use(apiRouters.routes());

console.log(apiRouters.stack.map(i => i.path));

//
app.listen(port, () => {
  console.log(`🚀 Server listening on port ${port}`);
});

// app.on("error", defaultAppErrorHandler);
