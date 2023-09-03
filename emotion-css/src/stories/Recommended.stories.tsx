import type { Meta, StoryObj } from '@storybook/react';
import Recommended from '../Pages/Recommended/Recommended';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Pages/Recommended',
  component: Recommended,
};

export default meta;

type Story = StoryObj<typeof Recommended>;

export const Default: Story = {
  args: {},
};
