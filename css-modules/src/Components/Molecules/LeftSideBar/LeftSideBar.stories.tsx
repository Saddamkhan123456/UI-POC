import type { Meta, StoryObj } from "@storybook/react";
import LeftSideBar from "./LeftSideBar";

const meta = {
  title: "Molecules/LeftSideBar",
  component: LeftSideBar,
  //   tags: ["autodocs"],
} satisfies Meta<typeof LeftSideBar>;

export default meta;

export const Default = () => {
  return <LeftSideBar />;
};
