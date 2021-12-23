import axios from "axios";

export const $dataApi = axios.create({
  baseURL: "https://swapi.dev/api/",
});
