import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const DividerCss = css`
  border: 1px solid #bebebe;
  width: 100%;
`;
const StyledDivider = styled.div`
  ${DividerCss}
`;
const Divider = () => {
  return <StyledDivider />;
};

export default Divider;
