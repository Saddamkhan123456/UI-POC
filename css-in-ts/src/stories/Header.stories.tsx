import type { Meta, StoryObj } from "@storybook/react";

import HeaderComponent from "../Components/Molecules/Header";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Molecules",
  component: HeaderComponent,
} satisfies Meta<typeof HeaderComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Header: Story = {};
