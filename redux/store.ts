import { createWrapper } from "next-redux-wrapper";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import { configReducer } from "./slices/configSlice";
import { landingpageReducer } from "./slices/landingpageSlice";
import { availableLandingpagesReducer } from "./slices/availableLandingpagesSlice";
import { stelrSearchReducer } from "./slices/stelrSearchSlice";

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
