import { fetchSpecies } from "./../actionCreators/speciesActionCreator";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ISpeciesResponse, ISpeciesState } from "./../../models/species";

const initialState: ISpeciesState = {
  totalCount: 0,
  data: [],
  isLoading: false,
  error: "",
};

const speciesSlice = createSlice({
  name: "species",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchSpecies.fulfilled.type]: (
      state,
      action: PayloadAction<ISpeciesResponse>
    ) => {
      state.totalCount = action.payload.totalCount;
      state.data = action.payload.data;
      state.isLoading = false;
      state.error = "";
    },
    [fetchSpecies.pending.type]: (state) => {
      state.totalCount = 0;
      state.data = [];
      state.isLoading = true;
      state.error = "";
    },
    [fetchSpecies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.totalCount = 0;
      state.data = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default speciesSlice.reducer;
