import { CookiesManager } from "@assets/auth/CookiesManager";
import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ cookies, request }) => {
  const cookiesManager = new CookiesManager(cookies, request);

  try {
    /* await lucia.invalidateSession(sessionID);
    await lucia.deleteExpiredSessions(); //retirar despues

    const sessionCookie = lucia.createBlankSessionCookie();

    request.headers.set("Set-Cookie", sessionCookie.serialize());

    cookies.set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes
    );  */
    await cookiesManager.invalidateAndDelete();

    return responseAsJson(
      { msg: "Sesión cerrada correctamente" },
      { sendAsMessage: true }
    );
  } catch (error) {
    return responseAsJson(
      { msg: "Error al cerrar sesión" },
      { sendAsMessage: true },
      404
    );
  }
};
