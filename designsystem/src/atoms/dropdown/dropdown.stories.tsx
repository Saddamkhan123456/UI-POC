import { Story } from "@storybook/react";
import { DropdownButton, DropdownProps } from "./dropdown";

const Dropdown = {
  title: "Design System/Molecules/Dropdown",
  component: DropdownButton,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    variant: {
      type: "select",
      options: ["primary", "secondary", "link"],
      defaultValue: "primary",
    },
    items:{
      type:"array"
    }
  },
};

export default Dropdown

const Template: Story<DropdownProps> = (args) => <DropdownButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  kind: "arrow-right",
  items:["Item 1", "Item 2", "Item 3", "Item 4"]
};