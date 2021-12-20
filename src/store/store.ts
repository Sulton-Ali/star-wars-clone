import { combineReducers, configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/peopleSlice";
import filmsReducer from "./reducers/filmsSlice";

const rootReducer = combineReducers({
  people: peopleReducer,
  films: filmsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
