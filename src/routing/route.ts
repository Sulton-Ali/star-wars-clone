import { HOME_ROUTE, PEOPLES_ROUTE } from "./../utils/constants";
import HomePage from "../pages/Home";
import PeoplesPage from "../pages/Peoples";
export const routes = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: PEOPLES_ROUTE,
    Component: PeoplesPage,
  },
];
