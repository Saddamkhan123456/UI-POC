import { Story } from "@storybook/react";
import Icon from "./icon";


const Icons = {
  title: "Design System/Atoms/Icons",
  component: Icon,
};

export default Icons


const Template: Story = (args) => <Icon kind="xyz" preview color="currentColor" className="" size={24}></Icon>;

export const Default = Template.bind({});
Default.args = {}