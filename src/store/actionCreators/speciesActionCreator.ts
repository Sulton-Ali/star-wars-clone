import { ISpeciesResponse } from "./../../models/species";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { $dataApi } from "../../http/dataApi";

export const fetchSpecies = createAsyncThunk<
  ISpeciesResponse,
  { page: number },
  { rejectValue: string }
>("species/fetchSpecies", async ({ page }, thunkAPI) => {
  const response = await $dataApi.get(`species/?page=${page}`);
  return { data: response.data.results, totalCount: response.data.count };
});
