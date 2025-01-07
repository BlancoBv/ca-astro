import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { DocumentBuilder } from "src/controllers/documentBuilder";

const document = new DocumentBuilder();

export const GET: APIRoute = async ({ url }) => {
  try {
    // Leer los archivos del directorio
    const files = await document
      .setDirectory("minutas")
      .setOrigin(url.origin)
      .getResult()
      .getFiles();

    files.forEach((el) => {
      const fecha = el.fileName.split(";")[1].split(".")[0];
      el["fechaCreacion"] = fecha;
    }); //añade propiedad de fecha de creación
    // Retornar los nombres de los archivos en formato JSON
    return new Response(JSON.stringify({ files }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Error retrieving files", details: error }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.formData();

  const file = body.get("file") as File;
  const fileName = body.get("fileName") as string;

  if (typeof file !== "object" || file.type !== "application/pdf") {
    return new Response("No file provided o no pdf", { status: 400 });
  }

  try {
    await document
      .setDirectory("minutas")
      .setFileName(fileName)
      .getResult()
      .writeFile(file);
    return responseAsJson({ msg: "Correcto" }, { sendAsMessage: true });
  } catch (error) {
    return responseAsJson({ error }, {}, 404);
  }
};

export const DELETE: APIRoute = async ({ request }) => {
  const { fileName } = await request.json();

  try {
    await document
      .setDirectory("minutas")
      .setFileName(fileName)
      .getResult()
      .deleteFile();
    return responseAsJson({ msg: "Eliminado correctamente" });
  } catch (error) {
    return responseAsJson({ msg: "Error eliminando minuta" }, {}, 400);
  }
};
