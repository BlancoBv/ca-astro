import './chunks/astro-designed-error-pages_Cq9WQRyw.mjs';
import { d as defineMiddleware, s as sequence } from './chunks/index_Cd3TYS_Q.mjs';
import { r as responseAsJson } from './chunks/responseAsJson_B4yFc9jl.mjs';
import { C as CookiesManager } from './chunks/CookiesManager_BfWIquu0.mjs';
import { L as Logs } from './chunks/index_CM2BeHHC.mjs';
import { RateLimiterMemory } from 'rate-limiter-flexible';

class VerifyPath {
  url;
  method;
  search;
  protectedRoutes = [
    {
      path: "api/blogs",
      method: ["GET", "POST", "PUT", "DELETE"],
      bypass: [
        /[?]status=aceptado&limit=\d+$/,
        /[?]status=aceptado&limit=\d+&page=\d+$/,
        /[?&]idblog=\w+(?:&|$)/
      ]
    },
    { path: "panel", method: ["GET", "POST", "PUT", "DELETE"] },
    { path: "api/imagenes", method: ["POST", "DELETE", "GET"] },
    {
      path: "api/articulos",
      method: ["POST", "DELETE", "PUT"]
    },
    { path: "api/user", method: ["POST", "PUT", "DELETE", "GET"] },
    {
      path: "api/roles",
      method: ["POST", "DELETE", "PUT", "GET"]
    },
    {
      path: "api/etiquetas",
      method: ["POST", "DELETE", "PUT", "GET"],
      bypass: [
        /[?&]idetiqueta=\w+&includeBlogs=true(?:&|$)/,
        /[?&]idetiqueta=\w+&includeArticulos=true(?:&|$)/
      ]
    },
    {
      path: "api/miembros",
      method: ["POST", "DELETE", "PUT", "GET"],
      bypass: [
        /[?]idmiembro=\w+&includeProyectos=true&includePublicaciones=true/,
        /[?]colaborador=(false|true)(?:&|$)/
        /*  /[?&]idmiembro=\w+(?:&|$)/, */
      ]
    },
    {
      path: "api/banners",
      method: ["POST", "DELETE", "PUT", "GET"],
      bypass: [/[?&]mostrar=true(?:&|$)/]
    },
    {
      path: "api/minutas",
      method: ["POST", "DELETE", "PUT"]
    },
    {
      path: "api/proyectos",
      method: ["POST", "DELETE", "PUT", "GET"]
    },
    {
      path: "api/publicaciones",
      method: ["POST", "DELETE", "PUT", "GET"]
    },
    {
      path: "api/logs",
      method: ["POST", "DELETE", "PUT", "GET"]
    },
    {
      path: "api/permisos",
      method: ["POST", "DELETE", "PUT", "GET"]
    }
  ];
  constructor(url, method, search) {
    this.url = url;
    this.method = method;
    this.search = search;
  }
  findMatch() {
    return this.protectedRoutes.some((el) => {
      const regExp = new RegExp(el.path);
      if (el.bypass) {
        const isBypass = el.bypass?.some((bypass) => {
          const regExp2 = new RegExp(bypass);
          return regExp2.test(this.search);
        });
        if (isBypass) return false;
      }
      return regExp.test(this.url) && el.method.some((m) => m === this.method);
    });
  }
  isProtected() {
    return this.findMatch();
  }
  pathnameType() {
    const regExp = new RegExp(/\/api\//);
    if (regExp.test(this.url)) {
      return "api";
    }
    return "content";
  }
}

const apiAuth = defineMiddleware(
  async ({ url, request, cookies }, next) => {
    const verifyPath = new VerifyPath(url.pathname, request.method, url.search);
    const cookiesManager = new CookiesManager(cookies, request);
    const { isValid, user } = await cookiesManager.validate();
    const res = await next();
    if (verifyPath.isProtected() && verifyPath.pathnameType() === "api" && !isValid) {
      return responseAsJson(
        { msg: "No autorizado." },
        { sendAsMessage: true },
        401
      );
    }
    if (verifyPath.isProtected() && verifyPath.pathnameType() === "api" && isValid) {
      try {
        await Logs.create({
          ruta: request.url,
          method: request.method,
          status: res.status,
          idUsuario: user?.id ?? null
        });
      } catch (error) {
        console.log(error);
      }
    }
    return res;
  }
);

const panelAuth = defineMiddleware(
  async ({ url, request, cookies, redirect, locals }, next) => {
    const verifyPath = new VerifyPath(url.pathname, request.method, url.search);
    const cookiesManager = new CookiesManager(cookies, request);
    const { isValid, session, user } = await cookiesManager.validate();
    if (url.pathname === "/login") {
      if (isValid) {
        return redirect("/panel");
      }
    }
    if (verifyPath.isProtected() && verifyPath.pathnameType() === "content") {
      if (!isValid) {
        return redirect("/login");
      }
    }
    locals.user = user;
    locals.session = session;
    return next();
  }
);

const rateLimiter$1 = new RateLimiterMemory({
  points: 500,
  duration: 1,
  blockDuration: 30
});

const rateLimiter = defineMiddleware(
  async ({ url, request, cookies, redirect, locals, clientAddress }, next) => {
    try {
      await rateLimiter$1.consume(clientAddress, 1);
      return next();
    } catch (err) {
      return responseAsJson(
        { msg: "Demasiadas peticiones" },
        { sendAsMessage: true },
        429
      );
    }
  }
);

const noCache = defineMiddleware(async ({ url, request }, next) => {
  if (url.pathname.startsWith("/api/")) {
    const res = await next();
    return new Response(res.body, {
      headers: {
        "Cache-Control": "public, max-age=0",
        "Content-Type": "application/json"
      }
    });
  }
  return next();
});

const onRequest$1 = sequence(rateLimiter, noCache, panelAuth, apiAuth);

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
