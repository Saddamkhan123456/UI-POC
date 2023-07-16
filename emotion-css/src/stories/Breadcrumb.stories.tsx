import type { Meta, StoryObj } from '@storybook/react';

import Breadcrumb from '../Components/Atoms/Breadcrumb';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

const options = ['Option 1', 'Option 2', 'Option 3'];

export const basic: Story = {
  args: {
    lists: options,
  },
};
