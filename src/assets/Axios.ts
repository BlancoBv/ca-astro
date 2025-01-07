import axios from "axios";
const PROD = import.meta.env.PROD;

export default axios.create({
  baseURL: `${PROD ? import.meta.env.SITE : "http://localhost:4321"}/api/`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
});
