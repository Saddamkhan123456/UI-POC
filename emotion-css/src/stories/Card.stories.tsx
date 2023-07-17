import type { Meta, StoryObj } from '@storybook/react';

import CardComponent from '../Components/Atoms/Card';
import Typography from '../Components/Atoms/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Atoms/Card',
  component: CardComponent,
};

export default meta;

type Story = StoryObj<typeof CardComponent>;

export const Default: Story = {
  args: {
    children: (
      <Typography
        variant={'body'}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining"
        }
      />
    ),
  },
};
