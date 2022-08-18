import { Story } from "@storybook/react";
import { ShoppingCart } from "./index";
import {ShoppingCartProps} from './itemCard'

const BannerComponent = {
  title: "Design System/Atoms/ShoppingCart",
  component: ShoppingCart,

};

export default BannerComponent

const Template: Story<ShoppingCartProps> = (args) =>
 <ShoppingCart  {...args} />;

export const BasicBanner = Template.bind({});


