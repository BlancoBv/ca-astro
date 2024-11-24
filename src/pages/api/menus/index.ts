import responseAsJson from "@assets/responseAsJson";
import searchParamsToObject from "@assets/searchParamsToObject";
import { Menus, Submenus, Users } from "@model";
import type { APIRoute } from "astro";
import { ControllerBuilder } from "src/controllers/builder";

export const GET: APIRoute = async ({ url }) => {
  const search = searchParamsToObject(url.searchParams);
  const controller = new ControllerBuilder();

  controller
    .setModel(Menus)
    .setIncludedModels([
      {
        model: Submenus,
        required: false,
        attributes: ["ruta", "idsubmenu", "nombre", "descripcion"],
      },
      ...(Boolean(search.showUser)
        ? [
            {
              model: Users,
              attributes: { exclude: ["password", "usuario", "idRol"] },
            },
          ]
        : []),
    ])
    .setOrderFilters([
      ["idmenu", "ASC"],
      [Submenus, "idsubmenu", "ASC"],
    ]);
  const response = await controller.getResult().getAll();

  return responseAsJson(response);

  /*  try {
    const response = await Menus.findAll({
      include: [
        {
          model: Submenus,
          required: false,
          attributes: ["ruta", "idsubmenu", "nombre", "descripcion"],
        },
        ...(Boolean(search.showUser)
          ? [
              {
                model: Users,
                attributes: { exclude: ["password", "usuario", "idRol"] },
              },
            ]
          : []),
      ],
      order: [
        ["idmenu", "ASC"],
        [Submenus, "idsubmenu", "ASC"],
      ],
    });
    return responseAsJson(response);
  } catch (error) {
    return responseAsJson(
      { msg: "Error al obtener los menus", error },
      { sendAsMessage: true },
      404
    );
  } */
};

export const POST: APIRoute = async ({ request }) => {
  const {
    show,
    dropcollapse,
    descripcion,
    nombre,
    ruta,
    idUsuario,
  }: {
    show: boolean;
    dropcollapse: boolean;
    nombre: string;
    descripcion: string;
    ruta: string;
    idUsuario: number;
  } = await request.json();

  try {
    await Menus.create({
      nombre,
      dropcollapse,
      ruta,
      descripcion,
      show,
      idUsuario,
    });
    return responseAsJson(
      { msg: "Ruta añadida correctamente" },
      { sendAsMessage: true }
    );
  } catch (error) {
    return responseAsJson(
      { msg: "Error al crear la ruta", error },
      { sendAsMessage: true },
      404
    );
  }
};
