import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Components/Atoms/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Atoms/Typo',
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const H3: Story = {
  args: {
    text: 'What is Lorem Ipsum?',
    variant: 'h3',
  },
};
export const h4: Story = {
  args: {
    text: 'What is Lorem Ipsum?',
    variant: 'h4',
  },
};
export const h5: Story = {
  args: {
    text: 'What is Lorem Ipsum?',
    variant: 'h5',
  },
};
export const h6: Story = {
  args: {
    text: 'What is Lorem Ipsum?',
    variant: 'h6',
  },
};
export const subtitle: Story = {
  args: {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    variant: 'subtitle',
  },
};
export const body: Story = {
  args: {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    variant: 'body',
  },
};
export const caption: Story = {
  args: {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    variant: 'caption',
  },
};
