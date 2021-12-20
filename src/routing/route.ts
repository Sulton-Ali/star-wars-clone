import { FILMS_ROUTE, HOME_ROUTE, PEOPLES_ROUTE } from "./../utils/constants";
import HomePage from "../pages/Home";
import PeoplesPage from "../pages/Peoples";
import FilmsPage from "../pages/Films";
export const routes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: PEOPLES_ROUTE,
    Component: PeoplesPage,
  },
  {
    path: FILMS_ROUTE,
    Component: FilmsPage,
  },
];
