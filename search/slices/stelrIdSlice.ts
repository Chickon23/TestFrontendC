import { HYDRATE } from "next-redux-wrapper";
import {
  mapStelrQueryStringId,
  mapStelrQueryStringSimilarSearch,
} from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStelrIdSearch = createAsyncThunk(
  "stelr/getStelrIdSearch",
  async (action) => {
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
      jobs: [data.jobAds[0], ...result.data.jobAds],
    };
  }
);

// create reducer
export const stelrIdReducer = createSlice({
  name: "stelrId",

  initialState: {
    entities: [],
    loading: false,
  },

  reducers: {},

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.stelrId,
      };
    },
    [getStelrIdSearch.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    },
  },
});

// create Selector
export const selectStelrIdSearch = (state) =>
  state?.[stelrIdReducer.name]?.entities;
