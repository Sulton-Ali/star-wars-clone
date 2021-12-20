import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPeople, IPeopleResponse } from "../../models/people";
import { fetchPeople } from "../actionCreators/peopleActionCreator";

interface IPeopleState {
  people: IPeople[];
  totalCount: number;
  isLoading: boolean;
  error: string;
}
const initialState: IPeopleState = {
  people: [],
  totalCount: 0,
  isLoading: false,
  error: "",
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPeople.fulfilled.type]: (
      state,
      action: PayloadAction<IPeopleResponse>
    ) => {
      state.people = action.payload.people;
      state.totalCount = action.payload.totalCount;
      state.isLoading = false;
      state.error = "";
    },
    [fetchPeople.pending.type]: (state) => {
      state.people = [];
      state.totalCount = 0;
      state.isLoading = true;
      state.error = "";
    },
    [fetchPeople.rejected.type]: (state, action: PayloadAction<string>) => {
      state.people = [];
      state.totalCount = 0;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default peopleSlice.reducer;
