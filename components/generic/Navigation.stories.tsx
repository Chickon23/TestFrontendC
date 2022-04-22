import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navigation from "./Navigation";

export default {
  title: "Components/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
);

export const Default = Template.bind({});
