import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const cardStyles = css`
  background-color: #fff;
  border-radius: 0.875rem;
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  padding: 1rem;
`;

const CardContainer = styled.div`
  ${cardStyles}
`;

// Define the props interface
export interface CardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const CardComponent: React.FC<CardProps> = ({ children, style }) => {
  return <CardContainer style={style}>{children}</CardContainer>;
};

export default CardComponent;
