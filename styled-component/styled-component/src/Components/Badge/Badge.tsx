import React from 'react';
import { BadgeC, IBadgeProps } from './styles';

const Badge: React.FC<IBadgeProps> = ({ impact, label }) => {
  return <BadgeC impact={impact}>{label}</BadgeC>;
};

export default Badge;
