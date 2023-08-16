import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";

const meta = {
  title: "Molecules/Accordion",
  component: Accordion,
  //   tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TechDigestAccordion: Story = {
  args: {
    title: "About",
    children: "Accordion Details",
    count: "2",
  },
};
