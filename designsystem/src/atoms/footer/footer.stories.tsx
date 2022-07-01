import { Story } from "@storybook/react";
import { Footer, FooterProps } from "./index";

const FooterComponent = {
  title: "Design System/Atoms/Footer",
  component: Footer,
  
};

export default FooterComponent

const Template: Story<FooterProps> = (args) => <Footer  {...args} />;

export const BasicFooter = Template.bind({});
BasicFooter.args = {
    
};

