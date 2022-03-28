import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import axios from "axios";

import { ILandingpageState, LandingpageEntity } from "./types";

import { portal } from "../../PORTAL";

export const getLandingpage = createAsyncThunk(
  "landingpage/getLandingpage",
  async (landingpageUrlKey: string) => {
    const { data } = await axios.get(
      `http://dev.nomad.stellenanzeigen.de/api/temp/landingpage?portalName=${portal}&urlKey=${landingpageUrlKey}`
    );

    return data;
  }
);

const initialState: ILandingpageState = {
  entities: {} as LandingpageEntity,
  loading: false,
};

export const landingpageReducer = createSlice({
  name: "landingpage",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: ILandingpageState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.landingpage,
      };
    });
    builder.addCase(getLandingpage.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    });
  },
});

export const selectLandingpage = (state: AppState) =>
  state?.[landingpageReducer.name]?.entities;
