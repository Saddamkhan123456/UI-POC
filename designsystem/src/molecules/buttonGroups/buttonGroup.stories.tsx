import { Story } from "@storybook/react";
import { Button, ButtonProps } from "../../atoms/button";
import { ButtonGroup } from "./buttonGroups";

const ButtonGroupComponent = {
  title: "Design System/Molecules/Button Group",
  component: ButtonGroup,
  variant: {
    type: "select",
    options: ["primary", "secondary", "link"],
    defaultValue: "primary",
  },
};

export default ButtonGroupComponent;

const Template: Story<ButtonProps> = (args) => (
  <ButtonGroup {...args}>
    <Button children="Button 1" size="medium" isRounded={false} className="" />
    <Button children="Button 2" size="medium" isRounded={false} />
    <Button children="Button 3" size="medium" isRounded={false} />
    <Button children="Button 4" size="medium" isRounded={false} className="" />
  </ButtonGroup>
);
export const ButtonGroups = Template.bind({});
ButtonGroups.args = {};

const TemplateLarge: Story<ButtonProps> = (args) => (
  <ButtonGroup {...args}>
    <Button children="Button 1" size="large" className="" isRounded={false} />
    <Button children="Button 2" size="large" isRounded={false} />
    <Button children="Button 3" size="large" className="" isRounded={false} />
  </ButtonGroup>
);
export const LargeButton = TemplateLarge.bind({});
LargeButton.args = {};

const TemplateSmall: Story<ButtonProps> = (args) => (
  <ButtonGroup {...args}>
    <Button children="Button 1" size="small" className="" isRounded={false} />
    <Button children="Button 2" size="small" isRounded={false} />
    <Button children="Button 3" size="small" className="" isRounded={false} />
  </ButtonGroup>
);
export const SmallButton = TemplateSmall.bind({});
SmallButton.args = {};

const TemplateOutline: Story<ButtonProps> = (args) => (
  <ButtonGroup {...args}>
    <Button
      children="Button 1"
      size="small"
      variant="secondary"
      className=""
      isRounded={false}
    />
    <Button
      children="Button 2"
      size="small"
      variant="secondary"
      isRounded={false}
    />
    <Button
      children="Button 3"
      size="small"
      variant="secondary"
      className=""
      isRounded={false}
    />
  </ButtonGroup>
);
export const OutlineButtonGroup = TemplateOutline.bind({});
OutlineButtonGroup.args = {};
