import { createAsyncThunk } from "@reduxjs/toolkit";
import { $dataApi } from "../../http/dataApi";
import { IPeopleResponse } from "../../models/people";

export const fetchPeople = createAsyncThunk<
  IPeopleResponse,
  { page: number },
  { rejectValue: string }
>("people/fetchPeople", async ({ page }, thunkAPI) => {
  const response = await $dataApi.get(`people/?page=${page}`);
  return { people: response.data.results, totalCount: response.data.count };
});
