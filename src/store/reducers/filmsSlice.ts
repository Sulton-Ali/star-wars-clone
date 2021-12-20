import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchFilms } from "../actionCreators/filmsActionCreator";
import { IFilms, IFilmsState } from "../../models/films";

const initialState: IFilmsState = {
  data: [],
  isLoading: false,
  error: "",
};

const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFilms.fulfilled.type]: (state, action: PayloadAction<IFilms[]>) => {
      state.data = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    [fetchFilms.pending.type]: (state) => {
      state.isLoading = true;
      state.data = [];
      state.error = "";
    },
    [fetchFilms.rejected.type]: (state, action: PayloadAction<string>) => {
      state.data = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default filmsSlice.reducer;
