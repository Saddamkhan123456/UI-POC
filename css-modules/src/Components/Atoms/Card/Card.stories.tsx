import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import CategoryCard from "./CategoryCard";
import CardBody from "./CardBody";

const meta = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const categoryCard: Story = {
  args: {
    children: <CardBody href="/" categoryIcon="languages" title="Language" cardType="category-card" />,
  },
};
