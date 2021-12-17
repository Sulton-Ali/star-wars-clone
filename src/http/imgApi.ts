import axios from "axios";

export const $imgApi = axios.create({
  baseURL: "https://starwars-visualguide.com/assets/img/",
});
