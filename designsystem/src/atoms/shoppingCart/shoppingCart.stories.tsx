import { Story } from "@storybook/react";
import { ShoppingCart } from "./index";
import ItemCard, { ShoppingCartProps } from "./itemCard";

const ShoppingComponent = {
  title: "Design System/Atoms/ShoppingCart",
  component: ShoppingCart,
};

export default ShoppingComponent;

const Template: Story<ShoppingCartProps> = (args) => (
  <></>
);

export const BasicShoppingComponent = Template.bind({});
