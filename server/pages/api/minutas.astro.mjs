import { r as responseAsJson } from '../../chunks/responseAsJson_B4yFc9jl.mjs';
import { promises } from 'fs';
import path from 'path';
export { r as renderers } from '../../chunks/_@astro-renderers_BbUQvcMQ.mjs';

function generadorNombre(fileExtension) {
  let d = (/* @__PURE__ */ new Date()).getTime();
  let uuid = "itsrxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid + fileExtension;
}
class DocumentBuilder {
  document;
  constructor() {
    this.document = new Document();
  }
  reset() {
    this.document = new Document();
  }
  setFileName(fileName) {
    this.document.fileName = fileName;
    return this;
  }
  setAutoName(fileExtension) {
    const autoName = generadorNombre(fileExtension);
    this.document.fileName = autoName;
    return this;
  }
  setDirectory(directory) {
    this.document.directory = directory;
    return this;
  }
  setOrigin(origin) {
    this.document.origin = origin;
    return this;
  }
  getResult() {
    const result = this.document;
    this.reset();
    return result;
  }
}
class Document {
  _fileName = null;
  _directory = null;
  _origin = null;
  PROD = true;
  baseDir = this.PROD ? "/ca-astro/client" : "public";
  __dirname = path.resolve();
  set fileName(fileName) {
    this._fileName = fileName;
  }
  set directory(directory) {
    this._directory = directory;
  }
  set origin(origin) {
    this._origin = origin;
  }
  async writeFile(file) {
    const dir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this._directory ?? "",
      this._fileName ?? ""
    );
    try {
      const buffer = file.stream();
      await promises.writeFile(dir, buffer);
      return this._fileName;
    } catch (error) {
      throw error;
    }
  }
  async getFiles() {
    const dir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this._directory ?? ""
    );
    try {
      const files = (await promises.readdir(dir)).map((el) => ({
        url: this._origin + "/uploads/" + this._directory + "/" + el,
        fileName: el
      }));
      return files;
    } catch (err) {
      return [];
    }
  }
  updateFile() {
  }
  async deleteFile() {
    const dir = path.join(
      this.__dirname,
      this.baseDir,
      "uploads",
      this._directory ?? "",
      this._fileName ?? ""
    );
    try {
      await promises.unlink(dir);
    } catch (error) {
      throw error;
    }
  }
}

const document = new DocumentBuilder();
const GET = async ({ url }) => {
  try {
    const files = await document.setDirectory("minutas").setOrigin(url.origin).getResult().getFiles();
    files.forEach((el) => {
      const fecha = el.fileName.split(";")[1].split(".")[0];
      el["fechaCreacion"] = fecha;
    });
    return new Response(JSON.stringify({ files }), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error retrieving files", details: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};
const POST = async ({ request }) => {
  const body = await request.formData();
  const file = body.get("file");
  const fileName = body.get("fileName");
  if (typeof file !== "object" || file.type !== "application/pdf") {
    return new Response("No file provided o no pdf", { status: 400 });
  }
  try {
    await document.setDirectory("minutas").setFileName(fileName).getResult().writeFile(file);
    return responseAsJson({ msg: "Correcto" }, { sendAsMessage: true });
  } catch (error) {
    return responseAsJson({ error }, {}, 404);
  }
};
const DELETE = async ({ request }) => {
  const { fileName } = await request.json();
  try {
    await document.setDirectory("minutas").setFileName(fileName).getResult().deleteFile();
    return responseAsJson({ msg: "Eliminado correctamente" });
  } catch (error) {
    return responseAsJson({ msg: "Error eliminando minuta" }, {}, 400);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  GET,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
