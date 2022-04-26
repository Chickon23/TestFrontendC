import { Provider } from "react-redux";
import Homepage from "../../pages/home.page";

import GridSystem from "../../components/generic/GridSystem";
import SeoText from "../../components/generic/SeoText";
import LinkBox from "../../components/home/LinkBox";
import TopJobs from "../../components/home/TopJobs";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// A super-simple mock of the state of the store
export const MockedState = {
  entities: {
    BagPart: {
      ContentItems: [],
    },
  },
};

export const mockedConfigState = {
  entities: {
    Name: "Blau",
  },
};

// A super-simple mock of a redux store
const Mockstore = ({ homeState, configState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        config: createSlice({
          name: "config",
          initialState: configState,
          reducers: {},
        }).reducer,
        home: createSlice({
          name: "home",
          initialState: homeState,
          reducers: {},
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  title: "Pages/Homepage",
  component: Homepage,
  subcomponents: { GridSystem, TopJobs, SeoText, LinkBox },
  decorators: [(story) => <div>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof Homepage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args}>
    <GridSystem colCount={1} md={12} xxl={12}>
      <TopJobs title="Test" />
      <LinkBox />
      <SeoText />
    </GridSystem>
  </Homepage>
);

export const Default = Template.bind({});
Default.decorators = [
  (story) => (
    <Mockstore homeState={MockedState} configState={mockedConfigState}>
      {story()}
    </Mockstore>
  ),
];

export const PortalGreen = Template.bind({});
PortalGreen.decorators = [
  (story) => (
    <Mockstore
      homeState={{
        ...MockedState,
        entities: {
          BagPart: {
            ContentItems: [
              {
                MarkdownBodyPart: "TEXT",
              },
            ],
          },
        },
      }}
      configState={{
        ...mockedConfigState,
      }}
    >
      {story()}
    </Mockstore>
  ),
];
