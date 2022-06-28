import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.137.1:5000/",
//   baseURL: "http://172.16.180.0:5000/",

});

console.log(api.baseURL);

export default api;
