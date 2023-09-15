import type { Meta, StoryObj } from "@storybook/react";
import Bookmarked from "./Bookmarked";

const meta = {
  title: "Page/Bookmarked",
  component: Bookmarked,
} satisfies Meta<typeof Bookmarked>;

export default meta;

export const Default = () => {
  return <Bookmarked />;
};
