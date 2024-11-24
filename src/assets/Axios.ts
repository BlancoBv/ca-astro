import axios from "axios";
const PROD = import.meta.env.PROD;

export default axios.create({
  baseURL: `${PROD ? import.meta.env.SITE : "http://localhost:4321"}/api/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  /* validateStatus: (status: number) => {
    console.log(status);

    if (status === 401 || status === 403) {
      localStorage.removeItem("credentials");
      localStorage.removeItem("token");
      window.location.href = "/";
      return false;
    }
    return true;
  }, */
});
