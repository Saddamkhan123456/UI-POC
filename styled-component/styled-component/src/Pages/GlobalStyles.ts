import styled from 'styled-components';
import { theme } from '../theme';
import { CSSProperties } from 'react';
import { css } from 'styled-components';

interface GridContainerProps {
  columnCount?: number;
}

const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
};

export const GlobalPageStyle = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  padding-top: 1.875rem;

  /* Mobile Styles */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.875rem;
  }

  /* Tablet Styles */
  @media (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.tablet}) {
    padding: 1.875rem;
  }

  /* Desktop Styles */
  @media (min-width: ${breakpoints.tablet}) {
    padding: 1.875rem 7.5rem;
  }
`;

export const GridContainer = styled.div<GridContainerProps>`
  display: grid;
  gap: 1.875rem;
  width: 100%;
  grid-template-columns: ${(props) => `repeat(${props.columnCount || 4}, 1fr)`};
`;

export const AlignedLeft = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
`;
