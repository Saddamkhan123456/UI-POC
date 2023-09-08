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
  padding: 33px 0;
  border-bottom: 1px solid ${theme.gray300};
  position: relative;
  &:last-child {
    border-bottom: 0;
  }
`;

export const RightSection = styled.div<IListComponent>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const RightDetailSection = styled.div<IListComponent>`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ListContentWrapper = styled.div<IListComponent>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const ListFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const DateWrapper = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: ${theme.gray500};
`;
export const Bookmark = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
`;
