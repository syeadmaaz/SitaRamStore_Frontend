import axios from "axios";

const api = axios.create({
  // baseURL: "http://192.168.250.190:5001/",

  // baseURL: "http://192.168.29.155:5000/",

  // baseURL: "http://192.168.43.194:5000/",

  baseURL: "https://safe-citadel-40374.herokuapp.com/",
});

console.log(api.baseURL);

export default api;

