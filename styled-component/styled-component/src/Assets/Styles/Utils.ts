import styled from 'styled-components';
import { theme } from '../../theme';

interface IUtility {
  hasMargin: boolean;
}

export const H1 = styled.h1<IUtility>`
  font-size: 32px;
  font-weight: 500;
  margin-bottom: ${(props) => (props.hasMargin ? '30px' : '0')};
  margin-top: ${(props) => (props.hasMargin ? '0.67em;' : '0')};
  color: ${theme.gray500};
`;

export const H2 = styled.h2`
  font-size: 24px;
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

export const ListH1 = styled.p<IUtility>`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: ${(props) => (props.hasMargin ? '30px' : '0')};
  margin-top: ${(props) => (props.hasMargin ? '0.67em;' : '0')};
  color: ${theme.secondary};
  max-width: 640px;
`;
