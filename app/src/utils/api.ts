import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.140.140.12:3001",
});
