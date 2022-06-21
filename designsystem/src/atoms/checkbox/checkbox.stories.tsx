import { Story } from "@storybook/react";
import { Checkbox, CheckboxProps } from "./index";
import {useState} from 'react'

const CheckboxComponent =  {
  title: "Design System/Atoms/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    disabled: {
      type: "boolean",
    }
  },
};

export default CheckboxComponent


const Template: Story<CheckboxProps> = (args) => {
  const [isChecked, setChecked] = useState(false)
  return <Checkbox {...args} onChange={()=>setChecked(!isChecked)} checked={isChecked} label={isChecked ? 'Checked' : 'Unchecked'}  />
};

export const Default = Template.bind({});
Default.args = {
  variant:'success',
  size: "medium",
  children: "Checkbox",
};