import VerifyPath from "@assets/auth/verifyPaths";
import { defineMiddleware } from "astro:middleware";
import { CookiesManager } from "@assets/auth/CookiesManager";

export const panelAuth = defineMiddleware(
  async ({ url, request, cookies, redirect, locals }, next) => {
    const verifyPath = new VerifyPath(url.pathname, request.method, url.search);
    const cookiesManager = new CookiesManager(cookies, request);

    const { isValid, session, user } = await cookiesManager.validate();

    if (url.pathname === "/login") {
      if (isValid) {
        return redirect("/panel");
      }
    } //redirige al panel en caso de existir cookie de sesion

    if (verifyPath.isProtected() && verifyPath.pathnameType() === "content") {
      if (!isValid) {
        return redirect("/login");
      }
    } //verifica permisos en caso de contenido del panel

    locals.user = user;
    locals.session = session;

    return next();
  }
);
