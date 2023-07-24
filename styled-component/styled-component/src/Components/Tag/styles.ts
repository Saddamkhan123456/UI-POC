import styled from 'styled-components';
import { theme } from '../../theme';

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  border: 1px solid ${theme.gray700};
  background: ${theme.white};
  padding: 9px 16px;
  margin: 4px;
  cursor: pointer;
  font-family: sans-serif;
  font-size: 14px;
  color: ${theme.gray500};
  line-height: 1;
`;

export const CloseIcon = styled.span`
  margin-left: 8px;
`;
