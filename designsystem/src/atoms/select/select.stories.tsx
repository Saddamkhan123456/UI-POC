import { useState } from "react";
import { Story } from "@storybook/react";
import { SelectBoxProps, SelectBox } from "./index";

const Select = {
  title: "Design System/Atoms/SelectBox",
  component: SelectBox,
};

export default Select;

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

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  options: options,
  isMulti: true,
  placeholder: "Search Here",
};

export const SingleSelect = Template.bind({});
SingleSelect.args = {
  options: options,
  placeholder: "Search Here",
};
// const customStyles = {
//   option: (provided: any, state: { isFocused: any }) => ({
//     ...provided,
//     color: state.isFocused ? "#fff" : "#48AFF0",
//     padding: 10,
//     background: state.isFocused ? "#48AFF0" : "#fff",
//   }),
//   control: (provided: any, state: { isFocused: any }) => ({
//     ...provided,
//     border: state.isFocused ? "1px solid #48AFF0" : "1px solid #667580",
//   }),
//   menu: (provided: any) => ({
//     ...provided,
//     boxShadow: "none",
//     border: "1px solid black",
//   }),
//   multiValue: (provided: any) => ({
//     ...provided,
//     background: "#CFDCE6",
//   }),
//   input: (provided: any) => ({
//     ...provided,
//     borderRadius: "4px",
//   }),
// };
