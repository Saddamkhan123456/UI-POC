import type { Meta, StoryObj } from "@storybook/react";
import Bookmarked from "./Bookmarked";

const meta = {
  title: "Molecules/Bookmarked Section",
  component: Bookmarked,
  // tags: ["autodocs"],
} satisfies Meta<typeof Bookmarked>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
