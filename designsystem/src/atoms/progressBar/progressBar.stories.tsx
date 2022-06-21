import { Story } from "@storybook/react";
import { ProgressProps, ProgressBar } from "./index";

const ProgressBarComponent = {
  title: "Design System/Atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    variant: {
      type: "select",
      options: ["primary", "secondary", "success", "info", "warning"],
      defaultValue: "primary",
    },
    showValue: {
      type: "boolean",
    },
    value: {
      type: "number",
    },
    label: {
      type: "string",
    },
  },
};

export default ProgressBarComponent

const Template: Story<ProgressProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  variant: "primary",
  showValue: true,
  value: 20,
  label: "progress",
};
