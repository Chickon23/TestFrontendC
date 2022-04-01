import { ReactNode } from "react";

import App from "next/app";
import type { AppLayoutProps } from "next/app";

import { wrapper } from "../redux/store";
import { getConfig } from "../redux/slices/configSlice";
import { getAvailableLandingpages } from "../redux/slices/availableLandingpagesSlice";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import "bootstrap/dist/css/bootstrap-grid.min.css";

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

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  main {
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;


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
