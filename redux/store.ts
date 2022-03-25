import { createWrapper } from "next-redux-wrapper";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { configReducer } from "../config/slices/configSlice";
import { landingpageReducer } from "../landingPage/slices/landingpageSlice";
import { availableLandingpagesReducer } from "../landingPage/slices/availableLandingpagesSlice";
import { stelrSearchReducer } from "../search/slices/stelrSearchSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [configReducer.name]: configReducer.reducer,
      [availableLandingpagesReducer.name]: availableLandingpagesReducer.reducer,
      [landingpageReducer.name]: landingpageReducer.reducer,
      [stelrSearchReducer.name]: stelrSearchReducer.reducer,
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
