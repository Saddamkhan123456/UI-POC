import { Story } from "@storybook/react";
import { Pagination, PaginationProps } from "./index";

const PaginationComponent = {
  title: "Design System/Molecules/Pagination",
  component: Pagination,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    variant: {
      type: "select",
      options: ["primary", "secondary"],
      defaultValue: "primary",
    },
    records: {
      type: "number",
    },
    recordsPerPage: {
      type: "number",
    },
  },
};

export default PaginationComponent


const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "small",
  variant: "primary",
  records: 100,
  recordsPerPage: 10,
};
