import moment from "moment";

moment.locale("es-mx");

export function formatDate(
  date: string | Date,
  format?: "L" | "LL" | "LLL" | "YYYY" | "MMMM YYYY"
) {
  return moment(date).format(format ?? "L");
}

export function formatYear(date: Date | string) {
  return moment(date).year();
}
