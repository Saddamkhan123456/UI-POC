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
  font-family: sans-serif;
  color: ${theme.gray500};
  margin-right: 5px;
  cursor: ${(props) => (props.active ? 'default' : 'pointer')};
  position: relative;
  font-size: 20px;
  font-weight: ${(props) => (props.active ? '500' : '400')};
  text-transform: capitalize;
  &::before {
    content: '>';
    color: ${theme.gray500};
    margin-right: 5px;
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
  font-size: 14px;
`;

export const Text = styled.p`
  color: ${theme.gray400};
  margin: 0;
  font-size: 14px;
`;

export const SubSectionDiv = styled.div`
  font-family: sans-serif;
  position: relative;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 2px;
  &::before {
    content: '|';
    color: ${theme.gray400};
    margin: 0 11px;
  }
  &:first-child {
    &::before {
      content: '';
      display: none;
    }
  }
`;
