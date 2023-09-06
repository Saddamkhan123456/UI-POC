import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';

export const GlobalPageStyle = styled.div`
  min-height: 100vh;
`;
export const Container = styled.div`
  background: ${theme.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Mobile Styles */
  @media (max-width: 767px) {
    padding: 0 30px;
  }

  /* Tablet Styles */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 30px;
  }

  /* Desktop Styles */
  @media (min-width: 1024px) {
    padding: 0 120px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  width: 100%;
`;

export const H1 = styled.h1`
  font-size: 32px;
  font-weight: 500;
  color: ${theme.gray500};
`;
