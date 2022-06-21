import { Story } from "@storybook/react";
import { Button } from "../../atoms/button";
import { TooltipProps, Tooltip } from "./index";

const TooltipComponent = {
  title: "Design System/Molecules/Tooltip",
  component: Tooltip,
  argTypes: {
    tooltipContent: {
      type: 'any'
    },
    text: {
      type: 'any'  
    },
    place: {
      type: 'any',
      options: ["top", "right", "bottom", "left"]  
    },
    effect: {
      type: 'any',
      options: ["float", "solid"],
      defaultValue : "solid"  
    },
    type: {
      type: 'any',
      options: ["dark", "success", "warning", "error", "info", "light"],
      defaultValue: "light",
    },
    multiline: {
      type: 'boolean',
    }

  }
};

export default TooltipComponent

const Template: Story<TooltipProps> = (args) => {
  return (
    <div style={{height: "500px" , display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Tooltip {...args} />
    </div>
  );
};

export const BasicTooltip = Template.bind({});
BasicTooltip.args = {
  text: "WELCOME",
  tooltipContent : 'Tooltip Content',
  place: "top",
};

export const CustomTooltip = Template.bind({});
CustomTooltip.args = {
  text: <Button size={"small"} children={"Button"} isRounded={true}/>,
  tooltipContent : 'Tooltip Content',
  place: "top",
};

export const WithBorderTooltip = Template.bind({});
WithBorderTooltip.args = {
  text: <Button size={"small"} children={"Button"} isRounded={true}/>,
  tooltipContent : 'Tooltip Content',
  place: "top",
  border: true,
  borderColor: "#ff0000",
};

export const OnClickTooltip = Template.bind({});
OnClickTooltip.args = {
  text: "Click Me",
  tooltipContent : 'Tooltip Content on click',
  place: "right",
  type: "dark",
  event: "click"

};
