import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import axios from "axios";

import {
  IAvailableLandingpageState,
  AvailableLandingpagesEntity,
} from "./types";

import { portal } from "../../PORTAL";

export const getAvailableLandingpages = createAsyncThunk(
  "landingpage/getAvailableLandingpages",
  async () => {
    const { data } = await axios.get(
      `https://dev.orchardcms.stellenanzeigen.de/${portal}/api/contenttypes/landingpages`
    );

    return data;
  }
);

const initialState: IAvailableLandingpageState = {
  entities: {} as AvailableLandingpagesEntity,
  loading: false,
};

export const availableLandingpagesReducer = createSlice({
  name: "availableLandingpages",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(
      HYDRATE,
      (state: IAvailableLandingpageState, action: AnyAction) => {
        return {
          ...state,
          ...action.payload.availableLandingpages,
        };
      }
    );
    builder.addCase(
      getAvailableLandingpages.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.entities = payload;
      }
    );
  },
});

export const selectAvailableLandingpages = (state: AppState) =>
  state?.[availableLandingpagesReducer.name]?.entities;
