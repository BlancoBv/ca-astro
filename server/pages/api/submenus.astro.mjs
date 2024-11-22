import { S as Submenus } from '../../chunks/index_1D2--xwQ.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_CY4cSyXV.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  try {
    const res = await Submenus.create({
      nombre: body.nombre,
      descripcion: body.descripcion,
      ruta: body.ruta,
      idmenu: body.idmenu
    });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Error al crear rol", error }), {
      status: 400
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
