import { Provider } from "react-redux";
import Homepage from "../../pages/home.page"

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { ComponentMeta, ComponentStory } from "@storybook/react";

// A super-simple mock of the state of the store
export const MockedState = {
  entities: {
    BagPart: {
        ContentItems: []
    },
  },
};

// A super-simple mock of a redux store
const Mockstore = ({ homeState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
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
  decorators: [(story) => <div>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof Homepage>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Homepage> = (args) => (
  <Homepage {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (story) => <Mockstore homeState={MockedState}>{story()}</Mockstore>,
];

export const PortalGreen = Template.bind({});
PortalGreen.decorators = [
  (story) => (
    <Mockstore
      homeState={{
        ...MockedState,
        entities: {
          BagPart: {
            ContentItems: ["Tets"],
          },
        },
      }}
    >
      {story()}
    </Mockstore>
  ),
];