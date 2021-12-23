import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/peopleSlice";
import filmsReducer from "./reducers/filmsSlice";
import speciesReducer from "./reducers/speciesSlice";

const rootReducer = combineReducers({
  people: peopleReducer,
  films: filmsReducer,
  species: speciesReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
