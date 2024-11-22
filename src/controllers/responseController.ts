interface Builder {
  setResponse(dbResponse: { [key: string]: any } | any[]): void;
}

export class ResponseBuilder implements Builder {
  private response: ServerResponse;

  constructor() {
    this.response = new ServerResponse();
  }

  reset() {
    this.response = new ServerResponse();
  }

  setResponse(dbResponse: { [key: string]: any } | any[]): void {
    this.response.responseBody = dbResponse;
  }

  setResponseProperty(property: { [key: string]: any }) {
    this.response.responseBody = { ...this.response.responseBody, ...property };
  }

  getResult() {
    const result = new ServerResponse();
    this.reset();
    return result;
  }
}

class ServerResponse {
  public responseBody: { [key: string]: any } | any[] | undefined | null;
  public headers: { [key: string]: any } = {
    "Content-Type": "application/json",
  };

  toResponse() {
    let code: number = 200;
    if (this.responseBody === null) code = 404;

    return new Response(JSON.stringify(this.responseBody), {
      headers: this.headers,
      status: code,
    });
  }

  toErrorResponse(code?: number, msg?: string) {
    return new Response(JSON.stringify({ msg: msg ?? "Error" }), {
      headers: this.headers,
      status: code ?? 404,
    });
  }
}
