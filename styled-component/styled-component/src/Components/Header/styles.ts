import styled from 'styled-components';
import { theme } from '../../theme';
export interface IHeader {
  isBreadcrumb?: boolean;
}
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: ${theme.white};
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
