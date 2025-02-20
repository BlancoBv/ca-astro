import type { APIRoute } from "astro";
import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import ImageController from "src/controllers/ImageController";
import { Banners } from "@model";
import { ControllerBuilder } from "src/controllers/builder";

const imageController = new ImageController("banners");
const controller = new ControllerBuilder();

export const GET: APIRoute = async ({ url, locals }) => {
  const search = searchParamsToObject(url.searchParams);
  try {
    // Leer los archivos del directorio

    const response = await controller
      .setModel(Banners)
      .setWhereFilters({
        ...(search.mostrar === "true" && { mostrar: true }),
      })
      .setOrderFilters([["createdAt", "DESC"]])
      .setAttributes({
        exclude: locals.user ? [] : ["updatedAt", "idUsuario", "mostrar"],
      })
      .getResult()
      .getAll();
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

export const PUT: APIRoute = async ({ request }) => {
  const { idbanner, ...body } = await request.json();

  try {
    await controller
      .setModel(Banners)
      .setWhereFilters({ idbanner })
      .setBody(body)
      .getResult()
      .update();

    return responseAsJson({});
  } catch (error) {
    return responseAsJson({ msg: "Error al actualizar ", error }, {}, 401);
  }
};
