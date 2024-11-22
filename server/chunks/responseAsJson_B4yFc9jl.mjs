function responseAsJson(response, config, statusNumber) {
  return new Response(
    JSON.stringify(
      response === null ? response : {
        ...config?.sendAsMessage ? { ...response } : { response }
      }
    ),
    {
      headers: {
        "Content-Type": "application/json"
      },
      status: statusNumber ? statusNumber : 200
    }
  );
}

export { responseAsJson as r };
