export const noEmptyOrBlankSpaces = {
  callback: (value: string) => {
    return value.trim().length > 0;
  },
  message: (field: string) =>
    `${field} no debe estar vacío o con espacios en blanco`,
};
