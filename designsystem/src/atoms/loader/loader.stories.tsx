import { Story } from "@storybook/react";
import { Loader, LoaderProps } from "./index";

// eslint-disable-next-line import/no-anonymous-default-export
const LoaderComponent = {
  title: "Design System/Atoms/Loader",
  component: Loader,
  argTypes: {
    variant: {
      type: "select",
      options: ["primary", "secondary", "success"],
      defaultValue: "primary",
    },
    type: {
      type: "select",
      options: ["circular", "linear", "pulse"],
      defaultValue: "circular",
    }
  },
};

export default LoaderComponent;

const Template: Story<LoaderProps> = (args) => (
  <div className="wrapper h-5">
    <Loader {...args} />{" "}
  </div>
);

export const Default = Template.bind({});
Default.args = {};

export const Pulse = Template.bind({});
Pulse.args = {
  type: "pulse",
};

export const Linear = Template.bind({});
Linear.args = {
  type: "linear",
};