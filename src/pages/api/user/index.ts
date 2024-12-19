import type { APIRoute } from "astro";
import { Users } from "@model";
interface user {
  nombre: string;
  apepat: string;
  apemat: string;
  password: string;
  usuario: string;
  rol: string;
}

export const POST: APIRoute = async ({ request, locals }) => {
  const { user } = locals;

  const body: user = await request.json();
  try {
    if (user?.idRol !== 1) {
      throw new Error("No autorizado");
    }
    const res = await Users.create({ ...body });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(
      JSON.stringify({ msg: "Error al crear usuario", error }),
      { status: 400 }
    );
  }
};
