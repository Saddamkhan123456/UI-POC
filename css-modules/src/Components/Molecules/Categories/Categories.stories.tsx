import type { Meta, StoryObj } from "@storybook/react";

import Categories from "./Categories";

const meta = {
  title: "Molecules/Categories Section",
  component: Categories,
  // tags: ["autodocs"],
} satisfies Meta<typeof Categories>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
