import Router from "koa-router";

import authRouter from "./auth/index";
import toolRouter from "./flight/index";
import serverConfig from "../../config/server";
import { authenticateJWT } from "../middleware/authenticate.middleware";

const router = new Router({
  prefix: "/api/" + serverConfig.apiVersion
});

router.use("/auth", authRouter);
router.use(authenticateJWT);
router.use("/flight", toolRouter);

export default router;
