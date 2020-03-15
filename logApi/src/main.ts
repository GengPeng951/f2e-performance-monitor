/* tslint:disable no-var-requires */

/* 读取环境配置 */
// require("./env").loadEnv();

import Koa from "koa";
import koaBody from "koa-body";
// import KoaCors from "koa2-cors";
import { router } from "./routes";
import * as config from "./config";
import "./mysqlConfig";
// import * as env from "./env";
// import { ROOT_DIR_UPLOAD } from './utils/file'
// import { getLocalHost } from "./utils/host";
// import KoaLogger from "koa-logger";
// import { log } from './middleware/log'
// import routerLog from './middleware/routerLog'
// import "./model";

const app = new Koa();
// app.use(KoaLogger());
// app.use(routerLog())
// if (!env.isProductionDeploy()) {
//   app.use(
//     KoaCors({
//       origin: function() {
//         return getLocalHost();
//       },
//       allowMethods: ["GET", "POST"],
//       credentials: true
//     })
//   );
// }

app.use(koaBody({ multipart: true }));
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(config.PORT);
