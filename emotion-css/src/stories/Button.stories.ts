import type { Meta, StoryObj } from '@storybook/react';

import MyComponent from '../Components/Atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
} satisfies Meta<typeof MyComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
