import { styled } from 'styled-components';
import { theme } from '../../theme';
import { IBreadcrumbCustomProps } from './BreadcrumbCustom';

export interface IBreadcrumb {
  active: boolean;
  items: any[];
}

export interface IBreadcrumbTwo {
  item?: any;
  text?: string;
  kind?: string;
  type?: 'blog' | 'hard-problem' | string;
  items: any[];
}

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BreadcrumbItem = styled.span<IBreadcrumb>`
  color: ${theme.gray500};
  margin-right: 0.3125rem;
  cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  position: relative;
  font-size: 1.25rem;
  font-weight: ${(props) => (props.active ? '500' : '400')};
  text-transform: capitalize;
  &::before {
    content: '>';
    color: ${theme.gray500};
    margin-right: 0.3125rem;
  }

  &:last-child {
    cursor: default;
  }
  &:first-child {
    &::before {
      content: '';
    }
    cursor: default;
  }
`;

export const BreadcrumbTwoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ArticleText = styled.p<IBreadcrumbCustomProps>`
  color: ${(props) =>
    props.articleType === 'blog' ? theme.danger : props.articleType === 'hard-problem' ? theme.purple : theme.success};
  margin: 0;
  font-size: 0.875rem;
`;

export const Text = styled.p`
  color: ${theme.gray400};
  margin: 0;
  font-size: 0.875rem;
`;

export const SubSectionDiv = styled.div`
  position: relative;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 0.125rem;
  &::before {
    content: '|';
    color: ${theme.gray400};
    margin: 0 0.6875rem;
  }
  &:first-child {
    &::before {
      content: '';
      display: none;
    }
  }
  a {
    text-decoration: none;
    color: ${theme.gray400};
  }
`;
