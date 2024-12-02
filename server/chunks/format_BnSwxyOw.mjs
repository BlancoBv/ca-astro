import moment from 'moment';

moment.locale("es-mx");
function formatDate(date, format) {
  return moment(date).format(format ?? "L");
}
function formatYear(date) {
  return moment(date).year();
}

export { formatYear as a, formatDate as f };
