import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.250.190:5001/",
});

console.log(api.baseURL);

export default api;

