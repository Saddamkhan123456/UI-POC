import { Story } from "@storybook/react";
import { Button, ButtonProps } from "./index";

const ButtonComponent = {
  title: "Design System/Atoms/Button",
  component: Button,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "medium",
    },
    variant: {
      type: "select",
      options: ["primary", "secondary", "link"],
      defaultValue: "primary",
    },
    disabled: {
      type: "boolean",
    },
    // isRounded: {
    //   type: "boolean",
    // },
    isActive: {
      type: "boolean",
    },
    iconKind: {
      type: "string",
    },
    withIcon: {
      type: "boolean",
      defaultValue: "info",
    },
    iconOnly: {
      type: 'boolean',
    }
  },
};

export default ButtonComponent;

const TemplateSmall: Story<ButtonProps> = (args) => (
  <Button {...args}>
      Small Button
  </Button>
);

export const Small = TemplateSmall.bind({});
Small.args = {
  size: "small"
};

const TemplateLarge: Story<ButtonProps> = (args) => (
  <Button {...args}>
      Medium Button
  </Button>
);

export const Large = TemplateLarge.bind({});
Large.args = {
  size: "medium"
};

const TemplateXLarge: Story<ButtonProps> = (args) => (
  <Button {...args}>
      Extra Large Button
  </Button>
);

export const XLarge = TemplateXLarge.bind({});
XLarge.args = {
  size: "large"
};