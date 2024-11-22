import type { APIRoute } from "astro";
import { Submenus } from "@model";

interface submenus {
  nombre: string;
  descripcion: string;
  ruta: string;
  idmenu: number;
}

export const POST: APIRoute = async ({ request }) => {
  const body: submenus = await request.json();
  try {
    const res = await Submenus.create({
      nombre: body.nombre,
      descripcion: body.descripcion,
      ruta: body.ruta,
      idmenu: body.idmenu,
    });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ msg: "Error al crear rol", error }), {
      status: 400,
    });
  }
};
