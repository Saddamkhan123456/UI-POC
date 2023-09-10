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
  border-bottom: 0.0625rem solid ${theme.gray300};
  margin-bottom: 3.75rem;
  padding-bottom: 5rem;
  position: relative;
  flex-direction: column;
  width: 100%;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 1.25rem;
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
  max-width: 48.25rem;
  margin-bottom: 4.5rem;
`;

export const SubHeaderInnerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
