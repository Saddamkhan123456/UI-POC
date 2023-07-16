import type { Meta, StoryObj } from "@storybook/react";

import DropdownComponent from "../Components/Atoms/Dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Atoms",
  component: DropdownComponent,
} satisfies Meta<typeof DropdownComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dropdown: Story = {};
