import { Story } from "@storybook/react";
import { Sizes, SizesProps } from "./index";

const SizesComponent = {
  title: "Design System/Atoms/Sizes",
  component: Sizes,
  
};

export default SizesComponent

const Template: Story<SizesProps> = (args) => <Sizes />;

export const BasicSizes = Template.bind({});


