import { HYDRATE } from "next-redux-wrapper";
import { mapStelrQueryStringFullText, mapStelrQueryStringId, mapStelrQueryStringSimilarSearch } from "../../utils/helpers";
import { stelr } from "../../utils/axios";

import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";

import { ISearchState, StelrSearchEntity } from "./types";

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
  entities: {} as StelrSearchEntity,
  loading: false,
};

export const stelrSearchReducer = createSlice({
  name: "stelrSearch",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: ISearchState, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.stelrSearch,
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

export const selectStelrSearch = (state: AppState) =>
  state?.[stelrSearchReducer.name]?.entities;

export default stelrSearchReducer;
