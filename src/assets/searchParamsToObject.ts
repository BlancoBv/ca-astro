export default function (searchParams: URLSearchParams) {
  return Object.fromEntries(searchParams.entries());
}
