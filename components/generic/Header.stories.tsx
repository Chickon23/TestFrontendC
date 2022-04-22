import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import Header from "./Header";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// A super-simple mock of the state of the store
export const MockedState = {
  entities: {
    Name: "",
    Color: "",
  },
};

// A super-simple mock of a redux store
const Mockstore = ({ configState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        config: createSlice({
          name: "config",
          initialState: configState,
          reducers: {},
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default {
  title: "Components/Header",
  component: Header,
  decorators: [(story) => <div>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof Header>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (story) => <Mockstore configState={MockedState}>{story()}</Mockstore>,
];

export const PortalGreen = Template.bind({});
PortalGreen.decorators = [
  (story) => (
    <Mockstore
      configState={{
        ...MockedState,
        entities: { Name: "Green", Color: "green" },
      }}
    >
      {story()}
    </Mockstore>
  ),
];

export const PortalBlue = Template.bind({});
PortalBlue.decorators = [
  (story) => (
    <Mockstore
      configState={{
        ...MockedState,
        entities: { Name: "Blau", Color: "blue" },
      }}
    >
      {story()}
    </Mockstore>
  ),
];

export const Empty = Template.bind({});
Empty.decorators = [
  (story) => (
    <Mockstore
      configState={{
        ...MockedState,
        entities: {},
      }}
    >
      {story()}
    </Mockstore>
  ),
];
