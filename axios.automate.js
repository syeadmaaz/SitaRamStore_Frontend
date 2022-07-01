import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/",
  //   baseURL: "http://172.16.180.0:5000/",
});

console.log(api.baseURL);

export default api;

