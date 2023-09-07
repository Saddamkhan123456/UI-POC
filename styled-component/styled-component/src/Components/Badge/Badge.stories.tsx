import Badge from './Badge';

export default {
  title: 'Component/Badge',
  component: Badge,
  //   tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const LowImpactBadge = {
  args: {
    impact: 'medium',
    label: 'medium impact',
  },
};
export const HighImpactBadge = {
  args: {
    impact: 'high',
    label: 'high impact',
  },
};
