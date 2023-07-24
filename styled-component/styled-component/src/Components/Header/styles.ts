import styled from 'styled-components';
import { theme } from '../../theme';

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: ${theme.white};
  position: sticky;
  top: 0;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
