import Router from "koa-router";
import { report } from "./controller";

const prefix = "/report/log/performance";
const router = new Router({ prefix });

router.post("/add", ...([report.add] as any));

export { router };
