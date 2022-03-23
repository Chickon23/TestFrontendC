import { createWrapper } from "next-redux-wrapper";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { configReducer } from "../config/slices/configSlice";
// import { landingpageReducer } from "../landingPage/slices/landingpageSlice";
import { stelrFullTextReducer } from "../search/slices/stelrFullTextSlice";
// import { stelrFullTextOffsetReducer } from "../jobs/slices/stelrFullTextOffsetSlice";
import { stelrIdReducer } from "../search/slices/stelrIdSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [configReducer.name]: configReducer.reducer,
      //   [landingpageReducer.name]: landingpageReducer.reducer,
      [stelrFullTextReducer.name]: stelrFullTextReducer.reducer,
      // [stelrFullTextOffsetReducer.name]: stelrFullTextOffsetReducer.reducer,
      [stelrIdReducer.name]: stelrIdReducer.reducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
