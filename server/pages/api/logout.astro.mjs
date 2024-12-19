import { C as CookiesManager } from '../../chunks/CookiesManager_BfWIquu0.mjs';
import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_DB6v8AOh.mjs';

const POST = async ({ cookies, request }) => {
  const cookiesManager = new CookiesManager(cookies, request);
  try {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
