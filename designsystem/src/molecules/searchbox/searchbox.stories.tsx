/* eslint-disable import/no-anonymous-default-export */
import { Story } from "@storybook/react";
import { SearchBoxProps, SearchBox } from "./index";

const SearchBoxComponent = {
    title: "Design System/Molecules/SearchBox",
    component: SearchBox,
    argTypes: {
    variant: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
  },
};

export default SearchBoxComponent

const Template: Story<SearchBoxProps> = (args) => <SearchBox {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    variant: "small",
};

export const SearchButtonOnRight = Template.bind({});
SearchButtonOnRight.args = {
    searchButtonOnRight: false,
};