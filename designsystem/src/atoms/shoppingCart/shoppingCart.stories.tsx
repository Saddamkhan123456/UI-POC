import { Story } from "@storybook/react";
import { ShoppingCart, ShoppingCartProps } from "./index";

const BannerComponent = {
  title: "Design System/Atoms/ShoppingCart",
  component: ShoppingCart,
  
};

export default BannerComponent

const Template: Story<ShoppingCartProps> = (args) => <ShoppingCart  {...args} />;

export const BasicBanner = Template.bind({});


