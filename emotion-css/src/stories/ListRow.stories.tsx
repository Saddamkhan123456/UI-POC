import type { Meta, StoryObj } from "@storybook/react";

import ListRow from "../Components/Molecules/ListRow";
import image1 from "../Assets/Images/image1.png";
import image2 from "../Assets/Images/image2.png";
import image3 from "../Assets/Images/image3.png";
import image4 from "../Assets/Images/image4.png";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: "Molecules/ListRow",
  component: ListRow,
};

export default meta;

type Story = StoryObj<typeof ListRow>;

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

export const ListRowComponent: Story = {};
