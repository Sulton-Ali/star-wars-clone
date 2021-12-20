import { createAsyncThunk } from "@reduxjs/toolkit";
import { $dataApi } from "../../http/dataApi";

export const fetchFilms = createAsyncThunk(
  "films/fetchFilms",
  async (_, thunkAPI) => {
    const response = await $dataApi.get("films");
    return response.data.results;
  }
);
