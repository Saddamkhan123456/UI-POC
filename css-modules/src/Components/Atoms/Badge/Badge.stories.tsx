import type { Meta, StoryObj } from "@storybook/react";
import Badge from "./Badge";

const meta = {
  title: "Atoms/Badge",
  component: Badge,
  // tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "medium impact",
    isIcon: false,
  },
};

export const BadgeWithIcon: Story = {
  args: {
    label: "Hard Problem",
    isIcon: true,
    icon: "hard-problem",
    size: 20,
  },
};
