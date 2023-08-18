import type { Meta, StoryObj } from '@storybook/react';

import Accordian from '../Components/Molecules/Accordian';
import Typography from '../Components/Atoms/Typography';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Molecules/Accordian',
  component: Accordian,
};

export default meta;

type Story = StoryObj<typeof Accordian>;

const list = ['Brief Details', 'Best Practices'];

export const Default: Story = {
  args: {
    label: 'About',
    listItems: list,
  },
};
