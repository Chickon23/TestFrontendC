import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import LinkBox from "./LinkBox";

import { configureStore, createSlice } from "@reduxjs/toolkit";

// A super-simple mock of the state of the store
export const MockedState = {
  entities: {
    BagPart: {
      ContentItems: {
        1: {
          LinkBox: {
            Headline: {
              Text: "",
            },
            ShowMoreLink: {
              Url: "",
            },
          },
          BagPart: { ContentItems: [] },
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
  title: "Components/LinkBox",
  component: LinkBox,
  decorators: [(story) => <div>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof LinkBox>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof LinkBox> = (args) => (
  <LinkBox {...args} />
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
            ContentItems: {
              1: {
                LinkBox: {
                  Headline: {
                    Text: "Städte",
                  },
                  ShowMoreLink: {
                    Url: "https://www.stellenangebote-thueringen.de/stellenangebote/alle-staedte",
                    Text: "Show More",
                  },
                },
                BagPart: {
                  ContentItems: [
                    {
                      LinkBoxItem: {
                        LinkBoxItemLink: {
                          Url: "https://www.stellenangebote-thueringen.de/stellenangebote/arnstadt",
                          Text: "Arnstadt",
                        },
                      },
                    },
                    {
                      LinkBoxItem: {
                        LinkBoxItemLink: {
                          Url: "https://www.stellenangebote-thueringen.de/stellenangebote/arnstadt",
                          Text: "Arnstadt",
                        },
                      },
                    },
                    {
                      LinkBoxItem: {
                        LinkBoxItemLink: {
                          Url: "https://www.stellenangebote-thueringen.de/stellenangebote/arnstadt",
                          Text: "Arnstadt",
                        },
                      },
                    },
                  ],
                },
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
