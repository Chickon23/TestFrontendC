import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import SeoText from "./SeoText";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// A super-simple mock of the state of the store
export const MockedState = {
  entities: {
    BagPart: {
        ContentItems: {
            3: {
                MarkdownBodyPart: { Markdown: "" },
            },
        },
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
  title: "Components/SeoText",
  component: SeoText,
  decorators: [(story) => <div>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof SeoText>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof SeoText> = (args) => (
  <SeoText {...args} />
);

export const Default = Template.bind({});
Default.decorators = [
  (story) => <Mockstore homeState={MockedState}>{story()}</Mockstore>,
];

const text = `<h1 style="margin-top: -25px;">Stellenangebote und Jobs in Thüringen</h1> <p style="font-size: 18px; margin-bottom: 20px;">Auf www.stellenangebote-thueringen.de finden Sie immer aktuelle Jobs und Stellenangebote in <a href="/stellenangebote/bundesland-thueringen">Thüringen</a> und ganz Deutschland.<br>Von <a href="/stellenangebote/nordhausen">Nordhausen</a> bis <a href="/stellenangebote/hildburghausen">Hildburghausen</a>, von <a href="/stellenangebote/altenburg">Altenburg</a> bis <a href="/stellenangebote/eisenach">Eisenach</a>, hier finden Sie Ihren nächsten Karriere-Schritt.<br> Finden Sie noch heute Ihren Traumjob aus über 10.000 Stellenanzeigen!</p>`

export const PortalGreen = Template.bind({});
PortalGreen.decorators = [
  (story) => (
    <Mockstore
      homeState={{
        ...MockedState,
        entities: {
          BagPart: {
            ContentItems: {
              3: {
                MarkdownBodyPart: { Markdown: text },
              },
            },
          },
        },
      }}
    >
      {story()}
    </Mockstore>
  ),
];

// export const PortalBlue = Template.bind({});
// PortalBlue.decorators = [
//   (story) => (
//     <Mockstore
//       homeState={{
//         ...MockedState,
//         entities: { Name: "Blau", Color: "blue" },
//       }}
//     >
//       {story()}
//     </Mockstore>
//   ),
// ];
