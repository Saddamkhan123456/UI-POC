import { Story } from "@storybook/react";
import { Banner, BannerProps } from "./index";

const BannerComponent = {
  title: "Design System/Atoms/Banner",
  component: Banner,
  
};

export default BannerComponent

const Template: Story<BannerProps> = (args) => <Banner  {...args} />;

export const BasicBanner = Template.bind({});


