import { defineMiddleware } from "astro:middleware";

export const noCache = defineMiddleware(async ({ url, request }, next) => {
  if (url.pathname.startsWith("/api/")) {
    const res = await next();
    return new Response(res.body, {
      headers: {
        "Cache-Control": "public, max-age=0",
        "Content-Type": "application/json",
      },
    });
  }

  return next();
});
