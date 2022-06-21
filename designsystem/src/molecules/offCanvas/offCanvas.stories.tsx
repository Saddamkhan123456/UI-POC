import { Story } from "@storybook/react";
import { useState } from "react";
import { OffCanvasComponent, OffCanvasProps } from "./index";
import { Button } from "../../atoms/button";

const offCanvas =  {
  title: "Design System/molecules/OffCanvas",
  component: OffCanvasComponent,
  argTypes: {
    type: {
      type: "select",
      options: ["top", "left", "bottom", "right"],
      defaultValue: "left",
    },
    sizeInPercentage: {
      type: "number",
    },
    panelClassName: {
      type: "string",
    },
    panelContainerClassName: {
      type: "string",
    },
    noBackdrop: {
      type: "boolean",
    },
  },
};

export default offCanvas;

const Template: Story<OffCanvasProps> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        id="offCanvas"
        size="medium"
        variant="primary"
        onClick={() => setOpen(!open)}
      >
        Open Canvas
      </Button>
      <OffCanvasComponent
        {...args}
        onClose={(e: any) => setOpen(!open)}
        isOpen={open}
      >
        <h3 className="p-5">Add OffCanvas content here...</h3>
      </OffCanvasComponent>
    </>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  type: "right",
  sizeInPercentage: 30,
  panelClassName: "panel bg-theme-neutral85 text-theme-dark",
  panelContainerClassName: "panel-container",
  noBackdrop: false,
};
