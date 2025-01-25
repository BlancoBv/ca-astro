import { defineMiddleware } from "astro:middleware";
import { rateLimiter as RL } from "../rateLimiter";
import responseAsJson from "@assets/responseAsJson";

export const rateLimiter = defineMiddleware(async ({ clientAddress }, next) => {
  try {
    await RL.consume(clientAddress, 1);

    return next();
  } catch (err) {
    return responseAsJson(
      { msg: "Demasiadas peticiones" },
      { sendAsMessage: true },
      429
    );
  }
});
