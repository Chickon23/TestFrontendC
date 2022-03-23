import App, { AppInitialProps } from "next/app";
import { wrapper } from "../redux/store";
import { getConfig } from "../config/slices/configSlice";
import { createGlobalStyle } from "styled-components";

class MyApp extends App<AppInitialProps> {
  public static getInitialProps = wrapper.getInitialAppProps(
    (store) => async (context) => {
      const globalConfig = await store.dispatch(getConfig());

      return {
        pageProps: {
          ...(await App.getInitialProps(context)).pageProps,
          config: globalConfig,
        },
      };
    }
  );

  public render() {
    const { Component, pageProps } = this.props;
    // const getLayout = Component.getLayout || ((page) => page);

    const { Color } = pageProps.config.payload;

    return (
      //getLayout(
      <>
        <GlobalStyle color={Color} />
        <Component {...pageProps} />
      </>
    );
  }
}

const GlobalStyle = createGlobalStyle<{ color: string }>`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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

  * {
    box-sizing: border-box;
    color: ${({ color }) => color};
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
