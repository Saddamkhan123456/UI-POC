import { Story } from "@storybook/react";
import {Navbar, NavbarProps } from "./index";

const NavbarComponent = {
  title: "Design System/Atoms/Navbar",
  component: Navbar,
  argTypes: {
    
  },
};

export default NavbarComponent

const Template: Story<NavbarProps> = (args) => <Navbar  {...args} />;

export const BasicNavbar = Template.bind({});
BasicNavbar.args = {
    
};

