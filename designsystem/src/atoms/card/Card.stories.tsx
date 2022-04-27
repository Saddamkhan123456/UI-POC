import { Story } from "@storybook/react";
import { CardProps, ProductCard } from "./Card";
import fetchMock from "fetch-mock";
import cardData from "../../json/card.json";

const CardComponent = {
  title: "Components/Card",
  component: ProductCard,
  argTypes: {},
};

export default CardComponent;

const Template: Story<CardProps> = (args) => <ProductCard {...args} />;

export const BasicCard = () => {
  fetchMock.get(
    "api/get_user_data",
    () => {
      console.log(cardData);
      return cardData;
    },
    {
      overwriteRoutes: true,
    }
  );
  return (
    <>
      <ProductCard />
    </>
  );
};
