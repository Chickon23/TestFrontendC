import { HYDRATE } from "next-redux-wrapper";
import { mapStelrQueryStringFullText } from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import { ISearchState } from "./types";

export const getStelrFullTextSearch = createAsyncThunk(
  "stelr/getStelrFullTextSearch",
  async (action: AnyAction) => {
    const { data } = await stelr.get(
      mapStelrQueryStringFullText(action.payload)
    );
    console.log({ data });
    return data;
  }
);

export const getStelrFullTextOffsetSearch = createAsyncThunk(
  "stelr/getStelrFullTextOffsetSearch",
  async ({ query, offset }: { query: string; offset: number }) => {
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
    builder.addCase(HYDRATE, (state: ISearchState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.stelrFullText,
      };
    });
    builder.addCase(
      getStelrFullTextSearch.fulfilled,
      (state: ISearchState, { payload }) => {
        state.loading = false;
        state.entities = payload;
      }
    );
    builder.addCase(
      getStelrFullTextOffsetSearch.pending,
      (state: ISearchState) => {
        state.loading = true;
      }
    );
    builder.addCase(
      getStelrFullTextOffsetSearch.fulfilled,
      (state: ISearchState, { payload }) => {
        state.loading = false;
        state.entities[0].jobAds.push(...payload);
      }
    );
    builder.addCase(
      getStelrFullTextOffsetSearch.rejected,
      (state: ISearchState) => {
        state.loading = false;
      }
    );
  },
});

// create Selector
export const selectFullTextSearch = (state: AppState) =>
  state?.[stelrFullTextReducer.name]?.entities;

export default stelrFullTextReducer;
