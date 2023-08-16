import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./Accordion";
import TechDigestAccordion from "./TechDigestAccordion";

const meta = {
  title: "Molecules/Accordion",
  component: Accordion,
  //   tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

export const Default = () => {
  return <TechDigestAccordion />;
};
