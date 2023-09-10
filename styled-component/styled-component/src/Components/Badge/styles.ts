import { styled } from 'styled-components';
import { theme } from '../../theme';
export interface IBadgeProps {
  impact?: any;
  label?: any;
}
export const BadgeC = styled.button<IBadgeProps>`
  background-color: ${(props) =>
    props.impact === 'high' ? theme.success : props.impact === 'medium' ? theme.warning : '#000'};
  padding: 0.25rem 0.625rem;
  color: ${theme.white};
  border-radius: 0.625rem;
  text-transform: uppercase;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
