import styled from 'styled-components';
import { theme } from '../../theme';

interface IUtility {
  hasMargin: boolean;
}

export const H1 = styled.h1<IUtility>`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: ${(props) => (props.hasMargin ? '1.875rem' : '0')};
  margin-top: ${(props) => (props.hasMargin ? '0.042rem' : '0')};
  color: ${theme.gray500};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  margin-top: 0;
  color: ${theme.gray500};
`;

export const CustomLink = styled.div`
  position: absolute;
  bottom: 1.875rem;
  right: 0;
  a {
    text-decoration: none;
    color: ${theme.primary};
    font-size: 1rem;
    line-height: 0.6;
  }
`;

export const ListH1 = styled.p<IUtility>`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: ${(props) => (props.hasMargin ? '1.875rem' : '0')};
  margin-top: ${(props) => (props.hasMargin ? '0.042rem' : '0')};
  color: ${theme.secondary};
  max-width: 40rem;
`;
