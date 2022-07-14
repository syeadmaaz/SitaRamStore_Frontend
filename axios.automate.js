import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.43.194:5000/",
});

console.log(api.baseURL);

export default api;

