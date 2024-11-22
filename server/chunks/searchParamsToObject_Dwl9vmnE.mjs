function searchParamsToObject(searchParams) {
  return Object.fromEntries(searchParams.entries());
}

export { searchParamsToObject as s };
