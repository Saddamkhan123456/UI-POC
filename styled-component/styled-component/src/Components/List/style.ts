import styled from 'styled-components';

export interface IListComponent {
  image?: string;
  heading?: string;
  blogDetail?: any;
  index?: number;
}

export const ListStyle = styled.div<IListComponent>`
  display: flex;
  gap: 40px;
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
