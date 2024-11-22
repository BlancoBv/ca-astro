import type { Model } from "sequelize";

export default function (
  response: any[] | Model<any, any> | { [key: string]: any } | null,
  config?: { count?: boolean; pages?: boolean; sendAsMessage?: boolean },
  statusNumber?: number
) {
  return new Response(
    JSON.stringify(
      response === null
        ? response
        : {
            ...(config?.sendAsMessage ? { ...response } : { response }),
          }
    ),
    {
      headers: {
        "Content-Type": "application/json",
      },
      status: statusNumber ? statusNumber : 200,
    }
  );
}
