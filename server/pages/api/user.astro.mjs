import { U as Users } from '../../chunks/index_lYbwe5rL.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_Dy1BIr2k.mjs';

const POST = async ({ request }) => {
  const body = await request.json();
  try {
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
