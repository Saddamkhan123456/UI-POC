import type { Meta, StoryObj } from '@storybook/react';

import InputSearch from '../Components/Atoms/InputSearch';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Atoms/InputSearch',
  component: InputSearch,
};

export default meta;

type Story = StoryObj<typeof InputSearch>;

export const default1: Story = {
  args: {},
};
