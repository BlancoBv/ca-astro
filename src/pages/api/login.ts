import responseAsJson from "@assets/responseAsJson";
import validatePassword from "@assets/auth/validatePassword";
import { Users } from "@model";
import type { APIRoute } from "astro";
import { CookiesManager } from "@assets/auth/CookiesManager";

export const POST: APIRoute = async ({ request, cookies }) => {
  const { user, password }: { user: string; password: string } =
    await request.json();

  const cookiesManager = new CookiesManager(cookies, request);

  if (!user || !password) {
    return new Response("Falta usuario o contraseña", { status: 400 });
  }

  try {
    const foundUser = await Users.findOne({ where: { usuario: user } });

    if (!foundUser) {
      return new Response("Usuario invalido.", { status: 400 });
    }
    const validPassword = await validatePassword(foundUser.password, password);

    if (!validPassword) {
      return new Response("Contraseña incorrecta", { status: 400 });
    }

    await cookiesManager.create(foundUser.id);
    /* const session = await lucia.createSession(foundUser.id, {});

  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  ); */

    return responseAsJson(
      { msg: "Sesion iniciada correctamente" },
      { sendAsMessage: true }
    );
  } catch (error) {
    return responseAsJson(
      { msg: "Error al iniciar sesión" },
      { sendAsMessage: true },
      404
    );
  }
};
