import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import ImageController from "src/controllers/ImageController";

const imageController = new ImageController("images");

export const GET: APIRoute = async ({ url }) => {
  try {
    // Leer los archivos del directorio
    const files = await imageController.readFiles(url.origin);
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

  const file = body.get("imagen") as File;

  if (typeof file !== "object") {
    return new Response("No file provided", { status: 400 });
  }

  try {
    const preBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(preBuffer);

    await imageController.save(buffer);
    return responseAsJson({ msg: "Imagen subida correctamente" });
  } catch (error) {
    return new Response(
      JSON.stringify({ msg: "Error al subir imagen", error }),
      { status: 400 }
    );
  }
};

export const DELETE: APIRoute = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);

  try {
    await imageController.deleteFile(search.fileName);
    return responseAsJson({ msg: "Eliminado correctamente" });
  } catch (error) {
    return responseAsJson({ msg: "Error eliminando imagen" }, {}, 400);
  }
};
