import styled from 'styled-components';
import { theme } from '../../theme';

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.375rem;
  border: 0.0625rem solid ${theme.gray700};
  background: ${theme.white};
  padding: 0.5625rem 1rem;
  margin: 0.25rem;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 0.875rem;
  color: ${theme.gray500};
  line-height: 1;
`;

export const CloseIcon = styled.span`
  margin-left: 0.5rem;
`;
