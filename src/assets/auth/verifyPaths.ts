export default class VerifyPath {
  private url: string;
  private method: string;
  private search: string;

  private protectedRoutes: {
    path: string;
    method: string[];
    bypass?: RegExp[];
  }[] = [
    {
      path: "api/blogs",
      method: ["GET", "POST", "PUT", "DELETE"],
      bypass: [
        /[?]status=aceptado&limit=\d+$/,
        /[?]status=aceptado&limit=\d+&page=\d+$/,
        /[?&]idblog=\w+(?:&|$)/,
      ],
    },
    { path: "panel", method: ["GET", "POST", "PUT", "DELETE"] },
    { path: "api/imagenes", method: ["POST", "DELETE", "GET"] },
    {
      path: "api/articulos",
      method: ["POST", "DELETE", "PUT"],
    },
    { path: "api/user", method: ["POST", "PUT", "DELETE", "GET"] },
    {
      path: "api/roles",
      method: ["POST", "DELETE", "PUT", "GET"],
    },
    {
      path: "api/etiquetas",
      method: ["POST", "DELETE", "PUT", "GET"],
      bypass: [
        /[?&]idetiqueta=\w+&includeBlogs=true(?:&|$)/,
        /[?&]idetiqueta=\w+&includeArticulos=true(?:&|$)/,
      ],
    },
    {
      path: "api/miembros",
      method: ["POST", "DELETE", "PUT", "GET"],
      bypass: [
        /[?&]idmiembro=\w+&includeProyectos=true(?:&|$)/,
        /[?]colaborador=(false|true)(?:&|$)/,
        /[?&]idmiembro=\w+(?:&|$)/,
      ],
    },
    {
      path: "api/banners",
      method: ["POST", "DELETE", "PUT", "GET"],
      bypass: [/[?&]mostrar=true(?:&|$)/],
    },
  ];

  constructor(url: string, method: string, search: string) {
    this.url = url;
    this.method = method;
    this.search = search;
  }

  private findMatch() {
    return this.protectedRoutes.some((el) => {
      const regExp = new RegExp(el.path);

      if (el.bypass) {
        const isBypass = el.bypass?.some((bypass) => {
          const regExp = new RegExp(bypass);
          return regExp.test(this.search);
        });

        if (isBypass) return false;
      }
      return regExp.test(this.url) && el.method.some((m) => m === this.method);
    });
  }

  public isProtected(): boolean {
    return this.findMatch();
  }

  public pathnameType() {
    const regExp = new RegExp(/\/api\//);
    if (regExp.test(this.url)) {
      return "api";
    }
    return "content";
  }
}
