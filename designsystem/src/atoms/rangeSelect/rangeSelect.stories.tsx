import { Story } from "@storybook/react";
import React, { useState } from "react";
import Labeled, { RangeSelect, RangeSelectProps }  from "./rangeSelect";

const RangeSelectComponent = {
  title: "Design System/Atoms/RangeSelect",
  component: Labeled,

  argTypes: {
    hasTooltip: {
      type: "boolean",
    },
    rtl: {
      type: "boolean",
    },
    step: {
      type: "number",
    },
    min: {
      type: "number",
    },
    max: {
      type: "number",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default RangeSelectComponent;

const Template: Story<RangeSelectProps> = (args) => {
  return <RangeSelect {...args} />
};

export const DefaultRange = Template.bind({});
DefaultRange.args = {
  hasTooltip: false,
  rtl: false,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
};

export const TooltipOnly = Template.bind({});
TooltipOnly.args = {
  hasTooltip: true,
  rtl: false,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,

};