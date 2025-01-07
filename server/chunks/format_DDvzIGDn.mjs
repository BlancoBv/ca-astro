import moment from 'moment';

moment.locale("es-mx");
function formatDate(date, format) {
  return moment(date).format(format ?? "L");
}
function formatYear(date) {
  return moment(date).year();
}
function formatMoneda(monto) {
  if (monto === null) {
    return "---";
  }
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
  });
  return formatter.format(Number(monto));
}

export { formatYear as a, formatMoneda as b, formatDate as f };
