import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import axios from "axios";

// import { IHomeState, HomeEntity } from "./types";

import { portal } from "../../PORTAL";

export const getHomeData = createAsyncThunk("home/getHomeData", async () => {
  const { data } = await axios.get(
    `https://dev.orchardcms.stellenanzeigen.de/${portal}/api/content/4k7jkcmhf3t734c832kap36qcy`
  );

  return data;
});


const initialState = {
  entities: {},
  loading: false,
};

export const homeReducer = createSlice({
  name: "home",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.home,
      };
    });
    builder.addCase(getHomeData.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    });
  },
});

export const selectHomeInfo = (state: AppState) => state?.[homeReducer.name]?.entities;