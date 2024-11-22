import responseAsJson from "@assets/responseAsJson";
import type { APIRoute } from "astro";
export const GET: APIRoute = async ({}) => {
  return responseAsJson(null, { sendAsMessage: true }, 404);
};
