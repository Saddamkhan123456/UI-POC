import type { Story } from "@storybook/react";
import Divider from "./Divider";

const meta = {
  title: "Atoms/Divider",
  component: Divider,
};

export default meta;

export const Default: Story = (args: any) => <Divider />;
