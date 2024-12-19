import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import ImageController from "src/controllers/ImageController";
import { formatDate } from "@assets/format";

const imageController = new ImageController("minutas");

export const GET: APIRoute = async ({ url }) => {
  try {
    // Leer los archivos del directorio
    const files: { fileName: string; url: string; [key: string]: string }[] =
      await imageController.readFiles(
        import.meta.env.PROD ? import.meta.env.SITE : url.origin
      );

    files.forEach((el) => {
      const fecha = el.fileName.split(";")[1].split(".")[0];
      el["fechaCreacion"] = formatDate(fecha);
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
  const fecha = body.get("fecha") as string;

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
