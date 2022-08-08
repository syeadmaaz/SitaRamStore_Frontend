import axios from "axios";

const api = axios.create({
  // Maaz
  baseURL: "http://192.168.117.139:5000/",
  
  // Amrit
  // baseURL: "http://192.168.43.194:5000/",

  // Shashwat
  // baseURL: "http://192.168.43.194:5001/",
  // baseURL: "http://192.168.97.190:5000/",

});

console.log(api.baseURL);

export default api;

