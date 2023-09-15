import type { Meta, StoryObj } from "@storybook/react";
import MoreForYou from "./MoreForYou";

const meta = {
  title: "Molecules/MoreForYou Section",
  component: MoreForYou,
  // tags: ["autodocs"],
} satisfies Meta<typeof MoreForYou>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
