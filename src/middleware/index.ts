/* import responseAsJson from "@assets/responseAsJson";
import VerifyPath from "@assets/auth/verifyPaths";
import { defineMiddleware, sequence } from "astro:middleware";
import { CookiesManager } from "@assets/auth/CookiesManager";
import { Logs } from "@model";

export const onRequest = defineMiddleware(
  async ({ url, request, cookies, redirect, locals }, next) => {
    const verifyPath = new VerifyPath(url.pathname, request.method, url.search);
    const cookiesManager = new CookiesManager(cookies, request);

    const { isValid, session, user } = await cookiesManager.validate();

    if (url.pathname === "/login") {
      if (isValid) {
        return redirect("/panel");
      }

    } //redirige al panel en caso de existir cookie de sesion

    if (verifyPath.isProtected() && verifyPath.pathnameType() === "api") {
      if (!isValid) {
        return responseAsJson(
          { msg: "No autorizado." },
          { sendAsMessage: true },
          401
        );
      }
    } //verifica la cookie en consultas a la api

    if (verifyPath.isProtected() && verifyPath.pathnameType() === "content") {
      if (!isValid) {
        return redirect("/login");
      }
    } //verifica permisos en caso de contenido del panel

    locals.user = user;
    locals.session = session;

    const res = await next();

    if (
      verifyPath.isProtected() &&
      verifyPath.pathnameType() === "api" &&
      isValid
    ) {
      try {
        await Logs.create({
          ruta: request.url,
          method: request.method,
          status: res.status,
          idUsuario: user?.id ?? null,
        });
      } catch (error) {
        console.log(error);
      }
    }

    return res;
  }
);
 */

import { sequence } from "astro:middleware";
import { apiAuth } from "./apiAuth";
import { panelAuth } from "./panelAuth";
import { rateLimiter } from "./rateLimiter";
import { corsFromWWW } from "./corsFromWWW";

export const onRequest = sequence(corsFromWWW, rateLimiter, panelAuth, apiAuth);
