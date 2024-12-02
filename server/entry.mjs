import { r as renderers } from './chunks/_@astro-renderers_BuVY0NLu.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B2-qsjqE.mjs';
import { manifest } from './manifest_D5QcXz0J.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/articulos.astro.mjs');
const _page3 = () => import('./pages/api/banners.astro.mjs');
const _page4 = () => import('./pages/api/blogs.astro.mjs');
const _page5 = () => import('./pages/api/etiquetas.astro.mjs');
const _page6 = () => import('./pages/api/etiquetas-articulos.astro.mjs');
const _page7 = () => import('./pages/api/imagenes.astro.mjs');
const _page8 = () => import('./pages/api/login.astro.mjs');
const _page9 = () => import('./pages/api/logout.astro.mjs');
const _page10 = () => import('./pages/api/menus.astro.mjs');
const _page11 = () => import('./pages/api/miembros.astro.mjs');
const _page12 = () => import('./pages/api/permisos.astro.mjs');
const _page13 = () => import('./pages/api/roles.astro.mjs');
const _page14 = () => import('./pages/api/submenus.astro.mjs');
const _page15 = () => import('./pages/api/user.astro.mjs');
const _page16 = () => import('./pages/content/articulos/_etiqueta_.astro.mjs');
const _page17 = () => import('./pages/content/eventos/_etiqueta_.astro.mjs');
const _page18 = () => import('./pages/content/_id_.astro.mjs');
const _page19 = () => import('./pages/content.astro.mjs');
const _page20 = () => import('./pages/login.astro.mjs');
const _page21 = () => import('./pages/miembros/_id_.astro.mjs');
const _page22 = () => import('./pages/panel/articulos/crear.astro.mjs');
const _page23 = () => import('./pages/panel/blogs/add.astro.mjs');
const _page24 = () => import('./pages/panel/etiquetas.astro.mjs');
const _page25 = () => import('./pages/panel.astro.mjs');
const _page26 = () => import('./pages/_resource_/_route_.astro.mjs');
const _page27 = () => import('./pages/_resource_.astro.mjs');
const _page28 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.14_@types+node@22.5.5_rollup@4.21.3_typescript@5.6.2/node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/articulos/index.ts", _page2],
    ["src/pages/api/banners/index.ts", _page3],
    ["src/pages/api/blogs/index.ts", _page4],
    ["src/pages/api/etiquetas/index.ts", _page5],
    ["src/pages/api/etiquetas-articulos/index.ts", _page6],
    ["src/pages/api/imagenes/index.ts", _page7],
    ["src/pages/api/login.ts", _page8],
    ["src/pages/api/logout.ts", _page9],
    ["src/pages/api/menus/index.ts", _page10],
    ["src/pages/api/miembros/index.ts", _page11],
    ["src/pages/api/permisos/index.ts", _page12],
    ["src/pages/api/roles/index.ts", _page13],
    ["src/pages/api/submenus/index.ts", _page14],
    ["src/pages/api/user/index.ts", _page15],
    ["src/pages/content/articulos/[etiqueta].astro", _page16],
    ["src/pages/content/eventos/[etiqueta].astro", _page17],
    ["src/pages/content/[id].astro", _page18],
    ["src/pages/content/index.astro", _page19],
    ["src/pages/login/index.astro", _page20],
    ["src/pages/miembros/[id].astro", _page21],
    ["src/pages/panel/articulos/crear/index.astro", _page22],
    ["src/pages/panel/blogs/add/index.astro", _page23],
    ["src/pages/panel/etiquetas/index.astro", _page24],
    ["src/pages/panel/index.astro", _page25],
    ["src/pages/[resource]/[route].astro", _page26],
    ["src/pages/[resource]/index.astro", _page27],
    ["src/pages/index.astro", _page28]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///home/blanco/Documentos/ca-astro/dist/client/",
    "server": "file:///home/blanco/Documentos/ca-astro/dist/server/",
    "host": true,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
