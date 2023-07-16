import React from 'react';
import { Story } from '@storybook/react';
import Icon from './Icon';

const Icons = {
  title: 'Atoms/Icons',
  component: Icon,
};

export default Icons;

const Template: Story = (args) => <Icon kind='' preview color='currentColor' className='' size={24}></Icon>;

export const Default = Template.bind({});
Default.args = {};
