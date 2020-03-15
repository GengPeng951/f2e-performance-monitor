import Router from "koa-router";
import { hintErrorBody } from "../utils/response";
import Joi from "@hapi/joi";

type ParamsType = "query" | "body";

export default function paramsValidate(
  schema: Joi.Schema,
  type?: ParamsType
): Router.IMiddleware<any, {}> {
  return async function(ctx: Router.RouterContext, next: () => Promise<any>) {
    let paramsCollection: object = ctx.request.query || {};
    if (type === undefined) {
      const method = ctx.request.method.toUpperCase();
      if (method === "POST") {
        if (ctx.request.type === "multipart/form-data") {
          paramsCollection = Object.assign(
            {},
            ctx.request.body || {},
            ctx.request.files || {}
          );
        } else {
          paramsCollection = ctx.request.body || {};
        }
      }
    }
    const result = Joi.validate(paramsCollection, schema);
    if (result.error) {
      ctx.body = hintErrorBody("参数不符合要求", result.error.message);
    } else return next();
  };
}
