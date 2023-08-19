import { styled } from 'styled-components';
import { theme } from '../../theme';

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

export const Text = styled.p<IBreadcrumbTwo>`
  color: ${(props) =>
    props.type === 'blog' ? theme.danger : props.type === 'hard-problem' ? theme.purple : theme.gray800};
  margin: 0;
  font-size: 14px;
`;
export const BreadcrumbTwo = styled.div<IBreadcrumbTwo>`
  font-family: sans-serif;
  color: ${(props) =>
    props.type === 'blog' ? theme.danger : props.type === 'hard-problem' ? theme.purple : theme.gray800};
  position: relative;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  gap: 2px;
  &::before {
    content: '|';
    color: ${theme.gray800};
    margin: 0 11px;
  }
  &:first-child {
    &::before {
      content: '';
    }
  }
`;
