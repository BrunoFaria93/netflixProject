import axios from "axios";

const api = axios.create({
  baseURL: "https://massoterapia-server.herokuapp.com",
});

export default api;
