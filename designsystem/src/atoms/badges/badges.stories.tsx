import { Story } from "@storybook/react";
import { BadgeComponent, BadgesProps } from "./badge";

const Badge = {
  title: "Design System/Atoms/Badge",
  component: BadgeComponent,

  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    variant: {
      type: "select",
      options: ["primary", "secondary", "danger", "success"],
      defaultValue: "primary",
    },
    type: {
      type: "select",
      options: ["pill", "rounded", "outline", "outline-pill"],
      defaultValue: "rounded",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default Badge

const Template: Story<BadgesProps> = (args) => <BadgeComponent {...args} />;

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  size: "small",
  children: "badge",
  variant: "primary",
  type: "rounded",
};
