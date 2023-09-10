import styled from 'styled-components';
import { theme } from '../../theme';
export interface IHeader {
  isBreadcrumb?: boolean;
}
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.875rem;
  background-color: ${theme.white};
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 3.125rem;
`;
