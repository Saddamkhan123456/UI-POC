import type { Meta, StoryObj } from "@storybook/react";
import Home from "./Home";

const meta = {
  title: "Page/Home",
  component: Home,
} satisfies Meta<typeof Home>;

export default meta;

export const Default = () => {
  return <Home />;
};
