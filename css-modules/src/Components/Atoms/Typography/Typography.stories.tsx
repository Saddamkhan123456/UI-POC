import type { Meta, StoryObj } from "@storybook/react";
import Typography from "./Typography";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  // tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "What is Lorem Ipsum?",
    variant: "h4",
  },
};
export const H3: Story = {
  args: {
    text: "What is Lorem Ipsum?",
    variant: "h3",
  },
};
export const H4: Story = {
  args: {
    text: "What is Lorem Ipsum?",
    variant: "h4",
  },
};
export const H5: Story = {
  args: {
    text: "What is Lorem Ipsum?",
    variant: "h5",
  },
};
export const H6: Story = {
  args: {
    text: "What is Lorem Ipsum?",
    variant: "h6",
  },
};
export const Subtitle: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    variant: "subtitle",
  },
};
export const Body: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    variant: "body",
  },
};
export const Caption: Story = {
  args: {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s",
    variant: "caption",
  },
};
