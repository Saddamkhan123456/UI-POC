import { Story } from "@storybook/react";
import { Alert, AlertProps } from "./alerts";

const AlertComponent = {
  title: "Design System/Atoms/Alert",
  component: Alert,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    variant: {
      type: "select",
      options: ["primary", "secondary", "danger"],
      defaultValue: "primary",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default AlertComponent;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const Alerts = Template.bind({});
Alerts.args = {
  size: "small",
  children: "This is a primary alert—check it out!",
};

export const AlertIcon = Template.bind({});
AlertIcon.args = {
  size: "small",
  children: "This is a primary alert—check it out!",
  kind: "alarm",
};
