import { U as Users } from '../../chunks/index_DQ7uLXIm.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_BbUQvcMQ.mjs';

const POST = async ({ request, locals }) => {
  const { user } = locals;
  const body = await request.json();
  try {
    if (user?.idRol !== 1) {
      throw new Error("No autorizado");
    }
    const res = await Users.create({ ...body });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(
      JSON.stringify({ msg: "Error al crear usuario", error }),
      { status: 400 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
