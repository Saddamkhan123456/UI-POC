import { Story } from "@storybook/react";
import { HomePage } from "./HomePage";

const Login = {
  title: "Pages/HomePage",
  component: HomePage,
  argTypes: {},
};

export default Login;

const Template: Story = (args) => <HomePage />;

export const Default = Template.bind({});
Default.args = {};
