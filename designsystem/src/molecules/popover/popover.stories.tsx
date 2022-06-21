import { Story } from "@storybook/react";
import { Button } from "../../atoms/button";
import { Popover, PopoverProps } from "./index";

const PopoverComponent = {
  title: "Design System/Molecules/popover",
  component: Popover,
  argTypes: {
    text: {
      type: "any",
    },
    event: {
      type: "string",
    },
    heading: {
      type: "string",
    },
    content: {
      type: "any",
    },
    place: {
      type: "any",
      options: ["top", "right", "bottom", "left"],
    },
    type: {
      type: "any",
      options: ["dark", "success", "warning", "error", "info", "light"],
      defaultValue: "light",
    },
  },
};

export default PopoverComponent;

const popoverContent = () => {
  return (
    <>
      <h2 className="text-lg font-medium px-4 py-2 border-b">
        Popover heading
      </h2>
      <div className="p-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
    </>
  );
};

const Template: Story<PopoverProps> = (args) => {
  return (
    <div className="flex h-screen justify-center items-center">
      <Popover {...args}></Popover>
    </div>
  );
};

export const PopoverOnHover = Template.bind({});
PopoverOnHover.args = {
  place: "bottom",
  type: "light",
  text: <Button>Hover on me</Button>,
  popoverContent: popoverContent(),
};

export const PopoverOnClick = Template.bind({});
PopoverOnClick.args = {
  place: "bottom",
  type: "dark",
  event: "click",
  text: <Button>Click me</Button>,
  popoverContent: popoverContent(),
};
