import type { Meta, StoryObj } from "@storybook/react";
import Search from "./Search";

const meta = {
  title: "Atoms/Search",
  component: Search,
  tags: ["autodocs"],
} satisfies Meta<typeof Search>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSearchText: true,
    isSearchIcon: false,
    placeholder: "Search for Tech Digest, Hard Problems, Blogs, TL Articles…",
  },
};
