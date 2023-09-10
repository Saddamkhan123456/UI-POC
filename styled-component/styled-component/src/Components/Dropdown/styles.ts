import styled from 'styled-components';
import { theme } from '../../theme';

// Styled components
export const SelectWrapper = styled.div`
  position: relative;
  display: inline-flex;
  border: 0.0625rem solid ${theme.gray700};
  border-radius: 0.375rem;
  background: ${theme.white};
  padding: 0.6875rem 1rem;
  line-height: 1;
  gap: 3.5625rem;
  align-items: center;
`;

export const Select = styled.select`
  font-size: 1rem;
  outline: none;
  cursor: pointer;
  color: ${theme.gray500};
  border: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  line-height: 1;
`;
