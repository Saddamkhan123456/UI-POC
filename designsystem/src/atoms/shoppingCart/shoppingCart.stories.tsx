import { Story } from "@storybook/react";
import { ShoppingCart, ShoppingCartProps } from "./index";

const BannerComponent = {
  title: "Design System/Atoms/ShoppingCart",
  component: ShoppingCart,
  
};

export default BannerComponent

const Template: Story<ShoppingCartProps> = (args) =>
 <ShoppingCart  {...args}
 title="Black High Neck Cropped Top"
 brand="Nike"
 price="1294"
 thumbnail="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13843398/2021/4/19/1847ce50-4f55-4bad-aaf0-de8a2b31fbbf1618820819735-Inddus-Teal-Blue-Solid-Ruffle-Accordion-Pleat-Saree-71616188-1.jpg"

  />;

export const BasicBanner = Template.bind({});


