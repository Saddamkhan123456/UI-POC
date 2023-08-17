import type { Meta, StoryObj } from "@storybook/react";
import ViewMore from "./ViewMore";

const meta = {
  title: "Atoms/ViewMore",
  component: ViewMore,
  // tags: ["autodocs"],
} satisfies Meta<typeof ViewMore>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "view more",
  },
};
