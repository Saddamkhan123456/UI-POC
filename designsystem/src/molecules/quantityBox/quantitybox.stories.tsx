/* eslint-disable import/no-anonymous-default-export */
import { Story } from "@storybook/react";
import { QuantityBoxProps, QuantityBox } from "./index";

const QuantityBoxComponent = {
    title: "Design System/Molecules/QuantityBox",
    component: QuantityBox,
    argTypes: {},
};

export default QuantityBoxComponent

const Template: Story<QuantityBoxProps> = (args) => <QuantityBox {...args} />;

export const Basic = Template.bind({});


