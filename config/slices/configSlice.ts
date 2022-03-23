import { HYDRATE } from "next-redux-wrapper";
import { createSlice, createAsyncThunk, AnyAction } from "@reduxjs/toolkit";
import { AppState } from "../../redux/store";
import axios from "axios";

export const getConfig = createAsyncThunk("config/getConfig", async () => {
  const portal = "green";
  const { data } = await axios.get(
    `https://dev.orchardcms.stellenanzeigen.de/${portal}/api/contenttypes/config`
  );

  return data;
});

type ConfigEntity = {
  color: string;
  name: string;
};

// this apply to more than one store-slice - we should move it to its own file
export interface State {
  entities: Array<ConfigEntity>;
  loading: Boolean;
}

export const configReducer = createSlice({
  name: "config",

  initialState: {
    entities: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state: State, action: AnyAction) => {
      return {
        ...state,
        ...action.payload.config,
      };
    });
    builder.addCase(getConfig.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.entities = payload;
    });
  },
});

export const selectConfig = (state: AppState) =>
  state?.[configReducer.name]?.entities;
