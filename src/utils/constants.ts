export const CATEGORIES = {
  CHARACTER: "character",
  FILMS: "films",
  SPECIES: "species",
  STARSHIPS: "starships",
  VEHICLES: "vehicles",
  PLANETS: "planets",
};

export const HOME_ROUTE = "/";
export const PEOPLES_ROUTE = `/${CATEGORIES.CHARACTER}`;
export const FILMS_ROUTE = `/${CATEGORIES.FILMS}`;
export const SPECIES_ROUTE = `/${CATEGORIES.SPECIES}`;

export const IMAGE_API_BASE_URL =
  "https://starwars-visualguide.com/assets/img/";
export const DATA_API_BASE_URL = "https://swapi.py4e.com/api/";

export const ITEMS_PER_PAGE = 10;
