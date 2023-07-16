import type { Meta, StoryObj } from '@storybook/react';

import Chip from '../Components/Atoms/Chip';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Atoms/Chip',
  component: Chip,
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const H3: Story = {
  args: {
    label: 'Multiply',
    size: 'small',
    handleDelete: () => console.log('first'),
    outlined: true,
  },
};
