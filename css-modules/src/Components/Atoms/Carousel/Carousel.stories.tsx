import type { Story } from "@storybook/react";
import Carousel from "./Carousel";
import { techDigestData } from "../../Molecules/TechDigest/Data";

const meta = {
  title: "Atoms/Carousel",
  component: Carousel,
};

export default meta;

export const Default: Story = (args: any) => <Carousel {...args} techData={techDigestData} />;
