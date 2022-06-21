import { useState } from "react";
import { Story } from "@storybook/react";
import { SelectBoxProps, SelectBox } from "./index";

const Select1 = {
  title: "Design System/Molecules/Dropdown custom",
  component: SelectBox,
};

export default Select1;

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Template: Story<SelectBoxProps> = (args) => {
  const [selectedOption] = useState(null);

  const handleChange = () => {
    console.log(`Selected options ${selectedOption}`);
  };
  return (
    <>
      <SelectBox
        {...args}
        onChange={handleChange}
        defaultValue={selectedOption}
      />
    </>
  );
};

export const CustomDropdown = Template.bind({});
CustomDropdown.args = {
  options: options,
  placeholder: "I am custom component",
  isSearchable: false,
};
