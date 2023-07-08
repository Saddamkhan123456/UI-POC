import type { Meta, StoryObj } from "@storybook/react";

import Dropdown from "../Components/Atoms/Dropdown";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

const options = ["Option 1", "Option 2", "Option 3"];

export const DropdownComponent: Story = {
  args: {
    options: options,
  },
};
