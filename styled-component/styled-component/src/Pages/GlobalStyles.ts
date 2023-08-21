import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalPageStyle = styled.div`
  min-height: 100vh;
  background-color: red;
  color: white;
`;
export const Container = styled.div`
  background: white;
  height: 100%;
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
