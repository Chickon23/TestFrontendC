import { HYDRATE } from "next-redux-wrapper";
import {
  mapStelrQueryStringId,
  mapStelrQueryStringSimilarSearch,
} from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import { ISearchState, FullTextSearchEntity } from "./types";

export const getStelrIdSearch = createAsyncThunk(
  "stelr/getStelrIdSearch",
  async ({ jobId }: { jobId: string | string[] }) => {
    const responseId = await stelr.get(mapStelrQueryStringId(jobId));
    const subcategoryIds = responseId.data.jobAds[0].jobAd.subcategories;
    const locationIds = responseId.data.jobAds[0].jobAd.locationIds;

    const responseSimilar = await stelr.get(
      mapStelrQueryStringSimilarSearch(jobId, subcategoryIds, locationIds)
    );
    return {
      count: responseSimilar.data.count,
      countRelevant: responseSimilar.data.countRelevant,
      jobAds: [responseId.data.jobAds[0], ...responseSimilar.data.jobAds],
    };
  }
);

const initialState: ISearchState = {
  entities: {} as FullTextSearchEntity,
  loading: false,
};

export const stelrIdReducer = createSlice({
  name: "stelrId",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: ISearchState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.stelrId,
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

export const selectStelrIdSearch = (state: AppState) =>
  state?.[stelrIdReducer.name]?.entities;
