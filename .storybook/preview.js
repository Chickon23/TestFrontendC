import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";

import "bootstrap/dist/css/bootstrap.min.css";

import { theme } from "../pages/_app.page";
import { GlobalStyle } from "../pages/globalStyles";

if (typeof global.process === "undefined") {
  const { worker } = require("../__mocks__/browser");
  worker.start();
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const portalBlue = "blue";
const portalGreen = "green";

// pass ThemeProvider and array of your themes to decorator
addDecorator(
  withThemes(ThemeProvider, [theme(portalBlue), theme(portalGreen)])
);
addDecorator((story) => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
