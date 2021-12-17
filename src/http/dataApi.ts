import axios from "axios";

export const $dataApi = axios.create({
  baseURL: "https://swapi.py4e.com/api/",
});
