import { Story } from "@storybook/react";
import { LoginPage } from "./loginPage";

const Login = {
  title: "Pages/LoginPage",
  component: LoginPage,
  argTypes: {},
};

export default Login;

const Template: Story = (args) => <LoginPage />;

export const Default = Template.bind({});
Default.args = {};
