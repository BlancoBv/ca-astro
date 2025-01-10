interface errorData {
  code: string;
  response?: {
    data?: {
      msg: string;
      error?: {
        issues: { message: string; path: string[]; code: string }[];
      };
    };
  };
}

interface validator {
  setErrorObject(errorObject: any): this;
  setField(field: string): this;
}

export class validateBuilder implements validator {
  private validation: zodValidation;

  constructor() {
    this.validation = new zodValidation();
  }

  reset() {
    this.validation = new zodValidation();
  }

  setErrorObject(errorObject: any): this {
    this.validation.errorObject = errorObject;
    return this;
  }
  setField(field: string): this {
    this.validation.field = field;
    return this;
  }

  getValidator() {
    const result = this.validation;
    return result;
  }
}

class zodValidation {
  public _errorObject: errorData | null = null;
  private _field: string | null = null;

  public set errorObject(errorObject: errorData) {
    this._errorObject = errorObject;
  }
  public set field(field: string) {
    this._field = field;
  }

  public getElement() {
    return this._errorObject?.response?.data?.error?.issues.find?.(
      (el) => el.path[0] === this._field
    );
  }

  public isError() {
    return this.getElement();
  }
  public get message() {
    return this.getElement()?.message;
  }
}

export const noEmptyOrBlankSpaces = {
  callback: (value: string) => {
    return value.trim().length > 0;
  },
  message: (field: string) =>
    `${field} no debe estar vacío o con espacios en blanco`,
};
