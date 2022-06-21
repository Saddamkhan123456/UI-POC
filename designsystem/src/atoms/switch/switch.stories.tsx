import { Story } from "@storybook/react";
import { useState } from "react";
import { SwitchProps, Switch } from "./index";

const SwitchComponent = {
  title: "Design System/Atoms/Switch",
  component: Switch,
};

export default SwitchComponent;

const Template: Story<SwitchProps> = (args) => {
  const [isChecked, setChecked] = useState(false);
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Switch
        {...args}
        checked={isChecked}
        onChange={() => setChecked(!isChecked)}
      />
    </div>
  );
};

export const BasicSwitch = Template.bind({});
BasicSwitch.args = {
  checked: false,
  disabled: false,
  label: "Switch Label",
  onColor: "#86d3ff",
  onHandleColor: "#48AFF0",
  handleDiameter: 18,
  uncheckedIcon: false,
  checkedIcon: false,
  height: 24,
  width: 48,
};

export const SecondarySwitch = Template.bind({});
SecondarySwitch.args = {
  checked: false,
  disabled: false,
  label: "Switch Label",
  onColor: "#007ECC",
  onHandleColor: "#005589",
  handleDiameter: 18,
  uncheckedIcon: false,
  checkedIcon: false,
  height: 24,
  width: 48,
};

export const SmallSwitch = Template.bind({});
SmallSwitch.args = {
  checked: false,
  disabled: false,
  label: "Switch Label",
  handleDiameter: 10,
  uncheckedIcon: false,
  checkedIcon: false,
  boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
  activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
  height: 16,
  width: 32,
};
