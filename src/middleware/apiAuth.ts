import responseAsJson from "@assets/responseAsJson";
import VerifyPath from "@assets/auth/verifyPaths";
import { defineMiddleware } from "astro:middleware";
import { CookiesManager } from "@assets/auth/CookiesManager";
import { Logs } from "@model";

export const apiAuth = defineMiddleware(
  async ({ url, request, cookies }, next) => {
    const verifyPath = new VerifyPath(url.pathname, request.method, url.search);
    const cookiesManager = new CookiesManager(cookies, request);

    const { isValid, user } = await cookiesManager.validate();

    const res = await next(); // se guarda el valor de next para usarlo posteriormente en los logs
    if (
      verifyPath.isProtected() &&
      verifyPath.pathnameType() === "api" &&
      !isValid
    ) {
      return responseAsJson(
        { msg: "No autorizado." },
        { sendAsMessage: true },
        401
      );
    } //verifica la cookie en consultas a la api

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
