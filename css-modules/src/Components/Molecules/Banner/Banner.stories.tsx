import type { Meta, StoryObj } from "@storybook/react";
import Banner from "./Banner";

const meta = {
  title: "Molecules/Banner",
  component: Banner,
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
