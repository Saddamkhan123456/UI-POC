import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";
import CardBody from "./CardBody";
import Aerospike from "../../../Assets/Images/aerospike.png";
import BookmarkedImg4 from "../../../Assets/Images/bookmarked-img4.png";
import Recommended from "../../../Assets/Images/recommended.jpg";

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

export const techDigestCard: Story = {
  args: {
    children: (
      <CardBody
        cardType="tech-card"
        isTechDigestImg={true}
        isCardBottomBox={true}
        imgUrl={Aerospike}
        alt="Aerospike"
        cardSubHeading="Aerospike"
        href="/"
      />
    ),
  },
};

export const bookmarkedCard: Story = {
  args: {
    children: (
      <CardBody
        isCardBottomBox={true}
        cardSubHeading="How To Start Automation Issue With Cypress Quickly?"
        cardSubText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
        backgroundImgUrl={BookmarkedImg4}
        cardType="bookmarked"
        href="/"
      />
    ),
  },
};

export const moreForYouCard: Story = {
  args: {
    children: <CardBody href="/" backgroundImgUrl={Recommended} title="Recently Uploaded" cardType="moreFor-you" />,
  },
};
