import { RouterContext } from "koa-router";

import { successBody, hintErrorBody } from "../utils/response";

export const add = async (ctx: RouterContext) => {
  console.log("ctx.request.body", ctx.request.body);

  try {
    ctx.body = successBody(123);
    // ctx.body = successBody();
  } catch (e) {
    console.log(e);
    ctx.body = hintErrorBody("查询失败");
  }
};
