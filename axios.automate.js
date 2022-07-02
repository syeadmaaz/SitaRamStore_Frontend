import axios from "axios";

const api = axios.create({
  //   baseURL: "http://172.16.180.0:5000/",

  baseURL: "http://192.168.43.194:5001",
});

console.log(api.baseURL);

export default api;

