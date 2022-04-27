import { Story } from "@storybook/react";
import { Login, LoginProps } from "./index";

const LoginComponent = {
  title: "Pages/Login",
  component: Login,
  argTypes: {},
};

export default LoginComponent;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};
