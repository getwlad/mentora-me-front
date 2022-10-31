import axios from "axios";

const serverUrl = "https://mentora-mem.herokuapp.com/";
// const serverUrl = "http://localhost:3001/";

const api = axios.create({
  baseURL: serverUrl,
});

export default api;
