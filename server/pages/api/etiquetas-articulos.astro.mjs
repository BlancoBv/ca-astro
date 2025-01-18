import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
export { renderers } from '../../renderers.mjs';

const GET = async ({}) => {
  return responseAsJson(null, { sendAsMessage: true }, 404);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
