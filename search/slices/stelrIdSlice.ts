import { HYDRATE } from "next-redux-wrapper";
import {
  mapStelrQueryStringId,
  mapStelrQueryStringSimilarSearch,
} from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";

import { ISearchState } from "./types";
import { AppState } from "../../redux/store";

export const getStelrIdSearch = createAsyncThunk(
  "stelr/getStelrIdSearch",
  async (action: AnyAction) => {
    const { data } = await stelr.get(mapStelrQueryStringId(action.payload));
    const subcategoryIds = data.jobAds[0].jobAd.subcategories;
    const locationIds = data.jobAds[0].jobAd.locationIds;

    const result = await stelr.get(
      mapStelrQueryStringSimilarSearch(
        action.payload,
        subcategoryIds,
        locationIds
      )
    );

    return {
      count: result.data.count,
      countRelevant: result.data.countRelevant,
      jobAds: [data.jobAds[0], ...result.data.jobAds],
    };
  }
);

// create reducer
export const stelrIdReducer = createSlice({
  name: "stelrId",

  initialState: {
    entities: {} as any,
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: ISearchState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.stelrFullText,
      };
    });
    builder.addCase(
      getStelrIdSearch.fulfilled,
      (state: ISearchState, { payload }) => {
        state.loading = false;
        state.entities = payload;
      }
    );
    builder.addCase(getStelrIdSearch.rejected, (state: ISearchState) => {
      state.loading = false;
    });
    builder.addCase(getStelrIdSearch.pending, (state: ISearchState) => {
      state.loading = true;
    });
  },
});

// create Selector
export const selectStelrIdSearch = (state: AppState) =>
  state?.[stelrIdReducer.name]?.entities;
