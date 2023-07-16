import type { Meta, StoryObj } from "@storybook/react";
import CarouselComponent from "../Components/Molecules/Carousel";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Components/Molecules",
  component: CarouselComponent,
} satisfies Meta<typeof CarouselComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Carousel: Story = {};
