import type { Meta, StoryObj } from '@storybook/react';
import TechDigest from '../Pages/TechDigest/TechDigest';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta = {
  title: 'Pages/TechDigest',
  component: TechDigest,
};

export default meta;

type Story = StoryObj<typeof TechDigest>;

export const Default: Story = {
  args: {},
};
