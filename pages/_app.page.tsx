import { ReactNode } from "react";

import App from "next/app";
import type { AppLayoutProps } from "next/app";

import { wrapper } from "../redux/store";
import { getConfig } from "../redux/slices/configSlice";
import { getAvailableLandingpages } from "../redux/slices/availableLandingpagesSlice";

import {  ThemeProvider } from "styled-components";

import { GlobalStyle } from "./globalStyles";

import "bootstrap/dist/css/bootstrap.min.css";

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    const globalConfig = await store.dispatch(getConfig());
    await store.dispatch(getAvailableLandingpages());

    return {
      pageProps: {
        ...(await App.getInitialProps(context)).pageProps,
        config: globalConfig,
      },
    };
  }
);


function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  const {Color} = pageProps.config.payload

  const theme = {
    colors: {
      primary: Color,
    },
  };

  return getLayout(
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
