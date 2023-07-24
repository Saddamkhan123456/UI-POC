import styled from 'styled-components';
import { theme } from '../../theme';

// Styled components
export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Select = styled.select`
  padding: 11px 16px;
  font-size: 20px;
  border-radius: 6px;
  border: 1px solid ${theme.gray700};
  background: ${theme.white};
  outline: none;
  cursor: pointer;
  color: ${theme.gray500};
`;

export const ArrowIcon = styled.span``;
