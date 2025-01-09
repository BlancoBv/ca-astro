class validateBuilder {
  validation;
  constructor() {
    this.validation = new zodValidation();
  }
  reset() {
    this.validation = new zodValidation();
  }
  setErrorObject(errorObject) {
    console.log({ errorObject });
    this.validation.errorObject = errorObject;
    return this;
  }
  setField(field) {
    this.validation.field = field;
    return this;
  }
  getValidator() {
    const result = this.validation;
    return result;
  }
}
class zodValidation {
  _errorObject = null;
  _field = null;
  set errorObject(errorObject) {
    this._errorObject = errorObject;
  }
  set field(field) {
    this._field = field;
  }
  getElement() {
    return this._errorObject?.response?.data?.error?.issues.find?.(
      (el) => el.path[0] === this._field
    );
  }
  isError() {
    return this.getElement();
  }
  get message() {
    return this.getElement()?.message;
  }
}
const noEmptyOrBlankSpaces = {
  callback: (value) => {
    return value.trim().length > 0;
  },
  message: (field) => `${field} no debe estar vacío o con espacios en blanco`
};

export { noEmptyOrBlankSpaces as n, validateBuilder as v };
