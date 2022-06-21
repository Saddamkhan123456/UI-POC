import {useState} from 'react'
import { Story } from "@storybook/react";
import { Radio, RadioProps } from "./index";

const RadioComponent = {
  title: "Design System/Atoms/Radio",
  component: Radio,
  argTypes: {
    size: {
      type: "select",
      options: ["small", "medium", "large"],
      defaultValue: "small",
    },
    disabled: {
      type: "boolean",
    },
    checked: {
      type: "boolean",
    },
  },
};

export default RadioComponent

const Template: Story<RadioProps> = (args) =>{
  const [value,setValue] = useState(true)
  const handleChange=()=>{
    console.log('in radio')
    setValue(!value)
  }
  return (<>
  <Radio {...args} name='test' id={'RadioFirst'} onChange={handleChange} checked={value} value='First' label='First' className="mr-3" />
  <Radio {...args} name='test' id={'RadioLast'} onChange={handleChange} checked={!value} value='Last' label='Last' /></>)
} ;

export const Default = Template.bind({});
Default.args = {
  size: "medium",
  checked: true,
  children: "Radio",
};