import styled from 'styled-components';
import { theme } from '../../theme';

// Styled components
export const SelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  border: 1px solid ${theme.gray700};
  border-radius: 6px;
  background: ${theme.white};
  padding: 11px 16px;
  line-height: 1;
  gap: 57px;
  align-items: center;
`;

export const Select = styled.select`
  font-size: 16px;
  outline: none;
  cursor: pointer;
  color: ${theme.gray500};
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1;
`;

export const ArrowIcon = styled.span``;
