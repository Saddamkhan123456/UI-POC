import React from 'react';
import { Meta, Story } from '@storybook/react';
import { IBadgeProps } from './styles';
import Badge from './Badge';

export default {
  title: 'Component/Badge',
  component: Badge,
} as Meta;

const Template: Story<IBadgeProps> = (args: any) => <Badge {...args} />;

export const LowImpactBadge = Template.bind({});
LowImpactBadge.args = {
  impact: 'medium',
  label: 'medium impact',
};

export const HighImpactBadge = Template.bind({});
HighImpactBadge.args = {
  impact: 'high',
  label: 'high impact',
};
