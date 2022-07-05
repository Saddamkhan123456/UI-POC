import { Story } from "@storybook/react";
import Card, { CardProps } from "./card";

const CardComponent = {
  title: "Design System/Atoms/Card",
  component: Card,
};

export default CardComponent;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const ProductCard = Template.bind({});
ProductCard.args = {};
