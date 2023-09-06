import styled from 'styled-components';
import { theme } from '../../theme';

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: 30px;
  color: ${theme.gray500};
`;

export const H2 = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 24px;
  margin-top: 0;
  color: ${theme.gray500};
`;
export const CustomLink = styled.div`
  position: absolute;
  bottom: 30px;
  right: 0;
  a {
    text-decoration: none;
    color: ${theme.primary};
    font-size: 16px;
    line-height: 0.6;
  }
`;
