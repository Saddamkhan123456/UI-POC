import { styled } from 'styled-components';
import { theme } from '../../theme';

export interface IBadgeProps {
  impact: string;
  label: string;
}

const getBackgroundColor = (props: IBadgeProps) => {
  if (props.impact === 'high') return theme.success;
  if (props.impact === 'medium') return theme.warning;
  return '#000';
};

export const BadgeC = styled.button<IBadgeProps>`
  background-color: ${getBackgroundColor};
  padding: 4px 10px;
  color: ${theme.white};
  border-radius: 4px;
  text-transform: uppercase;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default BadgeC;
