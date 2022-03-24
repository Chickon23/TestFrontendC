import { HYDRATE } from "next-redux-wrapper";
import { mapStelrQueryStringFullText } from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import { ISearchState, FullTextSearchEntity } from "./types";

export const getStelrFullTextSearch = createAsyncThunk(
  "stelr/getStelrFullTextSearch",
  async ({ query }: { query: string | string[] }) => {
    const { data } = await stelr.get(mapStelrQueryStringFullText(query));
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

const initialState: ISearchState = {
  entities: {} as FullTextSearchEntity,
  loading: false,
};

export const stelrFullTextReducer = createSlice({
  name: "stelrFullText",

  initialState,

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
        state.entities.jobAds.push(...payload);
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

export const selectFullTextSearch = (state: AppState) =>
  state?.[stelrFullTextReducer.name]?.entities;

export default stelrFullTextReducer;
