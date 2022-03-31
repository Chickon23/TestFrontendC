import { ReactNode } from "react";

import App from "next/app";
import type { AppLayoutProps } from "next/app";

import { wrapper } from "../redux/store";
import { getConfig } from "../redux/slices/configSlice";
import { getAvailableLandingpages } from "../redux/slices/availableLandingpagesSlice";

import { createGlobalStyle } from "styled-components";

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

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  const { Color } = pageProps.config.payload;

  return getLayout(
    <>
      <GlobalStyle color={Color} />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle<{ color: string }>`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    color: ${({ color }) => color};
  }
  
  html, body {
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

  button {
    font-size: 24px;
    font-weight: 700;
    background-color: #ffffff;
    border-color: ${({ color }) => color};
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    background-color: ${({ color }) => color};
    color: #ffffff;
  }

  input {
    border-color: ${({ color }) => color};
    border-radius: 5px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ color }) => color};
    border-radius: 5px;
  }

`;

export default wrapper.withRedux(MyApp);
