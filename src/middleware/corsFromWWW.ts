import { defineMiddleware } from "astro:middleware";

export const corsFromWWW = defineMiddleware(async ({ request }, next) => {
  request.headers.set(
    "Access-Control-Allow-Origin",
    "https://www.computodistribuido.org"
  );
  return next();
});
