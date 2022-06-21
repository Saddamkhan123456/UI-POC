import { Story } from "@storybook/react";
import { Breadcrumb, BreadcrumbProps } from "./breadcrumb";

const BreadcrumbComponent = {
  title: "Design System/Atoms/Breadcrumb",
  component: Breadcrumb,
  argTypes: {
    disabled: {
      type: "boolean",
    },
  },
};

export default BreadcrumbComponent;

const data = [
  { item: "item1", url: "#" },
  { item: "item2", url: "#" },
  { item: "item3", url: "#" },
  { item: "item4", url: "#" },
  { item: "item5", url: "#" },
  { item: "item6", url: "#" },
  { item: "item6", url: "#" },
  { item: "item6", url: "#" },
];

const filterdata = data.slice(1, -1);
console.log(filterdata);

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const DefaultBreadcrumb = Template.bind({});
DefaultBreadcrumb.args = {
  separator: "/",
  data: data,
  filterData: filterdata,
};

const TemplateIcon: Story<BreadcrumbProps> = (args) => (
  <div className="flex flex-wrap items-center justify-between py-3 border rounded text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
    <Breadcrumb separator="/" data={data}></Breadcrumb>
  </div>
);
export const Breadcrumbs = TemplateIcon.bind({});
Breadcrumbs.args = {};
