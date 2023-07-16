import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../theme';

interface IBadgeProps {
  impact: string;
  label: string;
}

const BadgeC = styled.button<IBadgeProps>`
  background-color: ${(props) =>
    props.impact === 'high' ? theme.success : props.impact === 'medium' ? theme.warning : '#000'};
  padding: 4px 10px;
  color: ${theme.white};
  border-radius: 4px;
  text-transform: uppercase;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
` as React.FC<IBadgeProps>;

const Badge: React.FC<IBadgeProps> = ({ impact, label }) => {
  return <BadgeC impact={impact}>{label}</BadgeC>;
};

export default Badge;
