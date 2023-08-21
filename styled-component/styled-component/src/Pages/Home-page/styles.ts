import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../theme';

export const HomePage = styled.div`
  min-height: 100vh;
  background-color: red;
  color: white;
`;
export const HeaderSearchSection = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Sections = styled.div`
  padding: 60px 0;
  display: flex;
  border-bottom: 1px solid ${theme.gray300};

  &:last-child {
    border-bottom: none;
  }
`;
