import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../theme';

export const HomePage = styled.div`
  min-height: 100vh;
`;
export const HeaderSearchSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const Sections = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.gray300};
  margin-bottom: 60px;
  padding-bottom: 80px;
  position: relative;
  flex-direction: column;
  width: 100%;
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 20px;
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
  margin-bottom: 80px;
`;
