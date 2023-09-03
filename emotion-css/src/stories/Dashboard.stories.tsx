import type { Meta, StoryObj } from "@storybook/react";

import Typography from "../Components/Atoms/Typography";
import Dashboard from "../Pages/Dashboard/Home";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: "Pages/Dashboard",
  component: Dashboard,
};

export default meta;

type Story = StoryObj<typeof Dashboard>;

export const Default: Story = {};
