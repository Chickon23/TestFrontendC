import { HYDRATE } from "next-redux-wrapper";
import { mapStelrQueryStringFullText } from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getStelrFullTextSearch = createAsyncThunk(
  "stelr/getStelrFullTextSearch",
  async (action) => {
    const result = await stelr.get(mapStelrQueryStringFullText(action.payload));
    return result.data;
  }
);

export const getStelrFullTextOffsetSearch = createAsyncThunk(
  "stelr/getStelrFullTextOffsetSearch",
  async ({ query, offset }) => {
    const result = await stelr.get(mapStelrQueryStringFullText(query, offset));
    return result.data.jobAds;
  }
);

// create reducer
export const stelrFullTextReducer = createSlice({
  name: "stelrFullText",

  initialState: {
    entities: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      return {
        ...state,
        ...action.payload.stelrFullText,
      };
    });
    builder.addCase(getStelrFullTextSearch.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    });
    builder.addCase(getStelrFullTextOffsetSearch.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getStelrFullTextOffsetSearch.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.entities.jobAds.push(...payload);
      }
    );
    builder.addCase(getStelrFullTextOffsetSearch.rejected, (state) => {
      state.loading = false;
    });
  },
});

// create Selector
export const selectFullTextSearch = (state) =>
  state?.[stelrFullTextReducer.name]?.entities;

export default stelrFullTextReducer;
