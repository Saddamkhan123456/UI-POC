import { Story } from "@storybook/react";
import { CardImage } from "./cardImg";
import { Card, CardBody, CardFooter, CardHeader, CardProps } from "./index";
import Placeholder from "../../assets/images/placeholder.png";
import { Button } from "../../atoms/button";


const CardComponent = {
  title: "Design System/Molecules/Card",
  component: Card,
  argTypes: {
    shadow: {
      type: "boolean",
    }
  },
};

export default CardComponent

const Basic: Story<CardProps> = (args) => 
    <Card>
        <CardHeader title={"Card Title"} subTitle="This is subtitle"/>
    </Card>;

export const BasicCard = Basic.bind({});
BasicCard.args = {
};

const Media: Story<CardProps> = (args) => 
    <Card>
        <CardImage imgSrc={Placeholder}/>
        <CardHeader title={"Card Title"} subTitle="This is subtitle"/>
    </Card>;

export const MediaCard = Media.bind({});
MediaCard.args = {
};

const MediaWithCardBody: Story<CardProps> = (args) => 
    <Card>
      <CardImage imgSrc={Placeholder}/>
      <CardHeader title={"Card Title"} subTitle="This is subtitle" />
      <CardBody>
        Supporting text include text like an article summary or  any description.
      </CardBody>
    </Card>;

export const MediaWithSupportingText = MediaWithCardBody.bind({});
MediaWithSupportingText.args = {
};

const CardFooterWithButtons: Story<CardProps> = (args) => 
    <Card>
      <CardImage imgSrc={Placeholder}/>
      <CardHeader title={"Card Title"} subTitle="This is subtitle" />
      <CardBody>
        Supporting text include text like an article summary or  any description.
      </CardBody>
      <CardFooter className="flex">
        <Button className="w-full" size={"small"}>Primary Button</Button>
        <Button size={"small"} variant="secondary" className="ml-4 w-full">Secondary Button</Button>
      </CardFooter>
    </Card>;

export const MediaWithSupportingTextAndButtons = CardFooterWithButtons.bind({});
MediaWithSupportingTextAndButtons.args = {
};