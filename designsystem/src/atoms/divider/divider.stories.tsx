import { Story } from "@storybook/react";
import { Hr, HrProps } from "./index";

const Divider = {
  title: "Design System/Atoms/Divider",
  component: Hr,
  argTypes: {},
};

export default Divider;

const Template: Story<HrProps> = (args) => (
  <>
    <div>List item</div>
    <Hr className="border-b-1 my-2" />
    <div>List item</div>
    <Hr className="border-b-1 my-2" />
    <div>List item</div>
  </>
);
export const divider = Template.bind({});
divider.args = {};
