import type { Meta, StoryObj } from "@storybook/react";
import TechDigestDetails from "./TechDigestDetails";

const meta = {
  title: "Page/TechDigestDetails",
  component: TechDigestDetails,
} satisfies Meta<typeof TechDigestDetails>;

export default meta;

export const Default = () => {
  return <TechDigestDetails />;
};
