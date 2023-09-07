import styled from 'styled-components';
import { theme } from '../../theme';

export interface IListComponent {
  image?: string;
  heading?: string;
  blogDetail?: any;
  index?: number;
}

export const ListStyle = styled.div<IListComponent>`
  display: flex;
  gap: 40px;
  border-bottom: 1px solid ${theme.gray300};
  &:last-child {
    border-bottom: 0;
  }
`;

export const RightSection = styled.div<IListComponent>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RightDetailSection = styled.div<IListComponent>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ListContentWrapper = styled.div<IListComponent>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ListFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: between;
`;
export const DateWrapper = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
`;
