import axios from "axios";

export const api = axios.create({
  baseURL: "https://nlw-return-impulse-production.up.railway.app/",
});
