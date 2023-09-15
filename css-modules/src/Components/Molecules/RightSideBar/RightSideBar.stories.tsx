import type { Meta, StoryObj } from "@storybook/react";
import RightSideBar from "./RightSideBar";

const meta = {
  title: "Molecules/RightSideBar",
  component: RightSideBar,
  //   tags: ["autodocs"],
} satisfies Meta<typeof RightSideBar>;

export default meta;

export const Default = () => {
  return <RightSideBar />;
};
