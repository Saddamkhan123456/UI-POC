import type { Meta, StoryObj } from "@storybook/react";

import Carousel from "../Components/Molecules/Carousel";
import image1 from "../Assets/Images/image1.png";
import image2 from "../Assets/Images/image2.png";
import image3 from "../Assets/Images/image3.png";
import image4 from "../Assets/Images/image4.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: "Molecules/Carousel",
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

const items = [
  {
    id: 1,
    name: "Item 1",
    image: image1,
  },
  {
    id: 2,
    name: "Item 2",
    image: image2,
  },
  {
    id: 3,
    name: "Item 3",
    image: image3,
  },
  {
    id: 4,
    name: "Item 4",
    image: image4,
  },
  {
    id: 5,
    name: "Item 1",
    image: image1,
  },
  {
    id: 6,
    name: "Item 2",
    image: image2,
  },
  {
    id: 7,
    name: "Item 3",
    image: image3,
  },
  {
    id: 8,
    name: "Item 4",
    image: image4,
  },
];

export const CarouselComponent: Story = {
  args: {
    items: items,
    itemCounts: [{ desktop: 4, tablet: 2, mobile: 1 }],
  },
};
