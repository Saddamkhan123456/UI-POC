import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
  // tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dropdownItems: [
      { value: "languages", label: "Languages" },
      { value: "WebFrameworks", label: "Web Frameworks" },
      { value: "Database", label: "Database" },
      { value: "BigData", label: "BigData" },
    ],
    defaultLabel: "Categories",
  },
};
