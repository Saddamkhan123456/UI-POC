import React from 'react';
import { Meta } from '@storybook/react';
import Icon from './Icons';

const meta = {
  title: 'Atoms/Icons',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;
export default meta;

export const Basic = () => {
  return <Icon kind="xyz" preview color="currentColor" className="" size={32} />;
};