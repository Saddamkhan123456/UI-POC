import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../theme';

export const HomePage = styled.div`
  min-height: 100vh;
  background-color: red;
  color: white;
`;
export const HeaderSearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Sections = styled.div`
  padding: 60px 0;
  display: flex;
  border-bottom: 1px solid ${theme.gray300};
  &:last-child {
    border-bottom: none;
  }
`;
export const DropdownSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;
`;
export const SubHeaderSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 772px;
`;
