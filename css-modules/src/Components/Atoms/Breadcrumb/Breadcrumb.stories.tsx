import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import { items } from "./Data";

const meta = {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  // tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: items,
  },
};
