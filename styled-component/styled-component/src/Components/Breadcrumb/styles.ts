import { styled } from 'styled-components';
import { theme } from '../../theme';

export interface IBreadcrumb {
  active: boolean;
  items: any;
}

export const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
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
