import moment from "moment";

moment.locale("es-mx");

export function formatDate(
  date: string | Date,
  format?: "L" | "LL" | "LLL" | "YYYY" | "MMMM YYYY" | "DD-MM-YYYY"
) {
  return moment(date).format(format ?? "L");
}

export function formatYear(date: Date | string) {
  return moment(date).year();
}
export function formatMoneda(monto: string | null) {
  if (monto === null) {
    return "---";
  }
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return formatter.format(Number(monto));
}
