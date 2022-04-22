// import { ComponentStory, ComponentMeta } from "@storybook/react";
// import { Provider } from "react-redux";
// import TopJobs from "./TopJobs";
// import { SwiperSlide } from "swiper/react";

// import { configureStore, createSlice } from "@reduxjs/toolkit";

// // A super-simple mock of the state of the store
// export const MockedState = {
//     entities: {
//       TopJobs: 0
//   },
// };

// // A super-simple mock of a redux store
// const Mockstore = ({ homeState, children }) => (
//   <Provider
//     store={configureStore({
//       reducer: {
//         config: createSlice({
//           name: "home",
//           initialState: homeState,
//           reducers: {},
//         }).reducer,
//       },
//     })}
//   >
//     {children}
//   </Provider>
// );

// export default {
//   title: "Components/TopJobs",
//   component: TopJobs,
//   decorators: [(story) => <div>{story()}</div>],
//   excludeStories: /.*MockedState$/,
// } as ComponentMeta<typeof TopJobs>;

// //👇 We create a “template” of how args map to rendering
// const Template: ComponentStory<typeof TopJobs> = (args) => (
//   <TopJobs {...args} ><SwiperSlide /></TopJobs>
// );

// export const Default = Template.bind({});
// Default.decorators = [
//   (story) => <Mockstore homeState={MockedState}>{story()}</Mockstore>,
// ];

// export const PortalGreen = Template.bind({});
// PortalGreen.decorators = [
//   (story) => (
//     <Mockstore
//       homeState={{
//         ...MockedState,
//         entities: {
//           TopJobs: 4,
//         },
//       }}
//     >
//       {story()}
//     </Mockstore>
//   ),
// ];

// export const PortalBlue = Template.bind({});
// PortalBlue.decorators = [
//   (story) => (
//     <Mockstore
//       homeState={{
//         ...MockedState,
//         entities: {
//           TopJobs: 2,
//         },
//       }}
//     >
//       {story()}
//     </Mockstore>
//   ),
// ];

// export const Empty = Template.bind({});
// Empty.decorators = [
//   (story) => (
//     <Mockstore
//       homeState={{
//         ...MockedState,
//         entities: {},
//       }}
//     >
//       {story()}
//     </Mockstore>
//   ),
// ];
