import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import ImageController from "src/controllers/ImageController";
import { Banners } from "@model";

const imageController = new ImageController("banners");

export const GET: APIRoute = async () => {
  try {
    // Leer los archivos del directorio
    const response = await Banners.findAll({
      where: { mostrar: true },
      order: [["createdAt", "DESC"]],
    });
    // Retornar los nombres de los archivos en formato JSON
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(null, { sendAsMessage: true }, 400);
  }
};

export const POST: APIRoute = async ({ request, url }) => {
  const body = await request.formData();

  const file = body.get("imagen") as File;
  const descripcion = body.get("descripcion");
  const mostrar = body.get("mostrar");
  const urlC = body.get("url");
  const idUsuario = body.get("idUsuario");

  if (typeof file !== "object") {
    return new Response("No file provided", { status: 400 });
  }

  try {
    const preBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(preBuffer);

    const fileName = await imageController.save(buffer);

    const response = await Banners.create({
      descripcion,
      mostrar,
      url: urlC,
      idUsuario,
      imagen: `${url.origin}/uploads/banners${fileName}`,
    });

    return responseAsJson(response);
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
