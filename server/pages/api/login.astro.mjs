import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import bcrypt from 'bcrypt';
import { U as Users } from '../../chunks/index_DBE-PR5w.mjs';
import { C as CookiesManager } from '../../chunks/CookiesManager_Cm5dHe09.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BuVY0NLu.mjs';

async function validatePassword(passwordDB, password) {
  return await bcrypt.compare(password, passwordDB);
}

const POST = async ({ request, cookies }) => {
  const { user, password } = await request.json();
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
