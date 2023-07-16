import type { Meta, StoryObj } from "@storybook/react";

import TabComponent from "../Components/Molecules/Tab";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Molecules",
  component: TabComponent,
} satisfies Meta<typeof TabComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tab: Story = {};
