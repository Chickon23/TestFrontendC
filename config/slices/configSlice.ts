import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import axios from "axios";

import { IConfigState } from "./types";

export const getConfig = createAsyncThunk("config/getConfig", async () => {
  const portal = "green";
  const { data } = await axios.get(
    `https://dev.orchardcms.stellenanzeigen.de/${portal}/api/contenttypes/config`
  );

  return data;
});

export const configReducer = createSlice({
  name: "config",

  initialState: {
    entities: {} as any,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: IConfigState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.config,
      };
    });
    builder.addCase(getConfig.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    });
  },
});

export const selectConfig = (state: AppState) =>
  state?.[configReducer.name]?.entities;
