/* eslint-disable import/no-anonymous-default-export */
import { Story } from "@storybook/react";
import { Input, InputProps } from "./index";

const InputComponent = {
  title: "Design System/Atoms/Input",
  component: Input,
  argTypes: {
    type: {
      type: "select", options: ["text", "password", "email", "number", "url"]
    },
    variant: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    feedbackState: {
      type: "select",
      options: ["normal", "has-error", "has-success"],
      defaultValue: "normal",
    },
    disabled: {
      type: "boolean",
    },
    loadingInput: {
      type: "boolean",
    },
    isRounded: {
      type: "boolean",
    },
  },
};

export default InputComponent

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "text",
  placeholder: "I am Placeholder",
  variant: "medium",
  label: "Text Field"
};

export const Error = Template.bind({});
Error.args = {
  type: "text",
  placeholder: "I am Placeholder",
  feedbackText: "Error Message",
  feedbackState: 'has-error',
  feedbackIcon: 'success',
  label: "Success Field"
};

export const Success = Template.bind({});
Success.args = {
  type: "text",
  placeholder: "I am Placeholder",
  feedbackText: "Error Message",
  feedbackState: 'has-success',
  feedbackIcon: 'success',
  label: "Success Field"
};

export const Loading = Template.bind({});
Loading.args = {
  type: "text",
  placeholder: "I am Placeholder",
  loadingInput: true,
  label: "Loading Input"
};