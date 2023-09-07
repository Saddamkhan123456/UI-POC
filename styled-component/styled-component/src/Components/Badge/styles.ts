import { styled } from 'styled-components';
import { theme } from '../../theme';
export interface IBadgeProps {
  impact: any;
  label: any;
}
export const BadgeC = styled.button<IBadgeProps>`
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
