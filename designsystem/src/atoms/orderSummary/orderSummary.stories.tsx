import { Story } from "@storybook/react";
import { OrderSummary, OrderSummaryProps } from "./index";

const BannerComponent = {
  title: "Design System/Atoms/OrderSummary",
  component: OrderSummary,
  
};

export default BannerComponent

const Template: Story<OrderSummaryProps> = (args) => <OrderSummary  {...args} />;

export const BasicBanner = Template.bind({});


