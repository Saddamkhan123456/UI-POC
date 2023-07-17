import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const olStyled = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  color: #000;
  font-size: 1.25rem;
  font-weight: 400;
  list-style: none;
`;
const liStyled = css`
  display: list-item;
  cursor: pointer;
  &:before {
    content: '/';
    padding-right: 0.5rem;
  }
  &:first-child {
    &:before {
      content: '';
    }
  }
`;
const active = css`
  ${liStyled}
  font-weight: 500;
`;

interface BreadcrumbProps {
  lists: React.ReactNode[];
}

const StyledOL = styled.ul`
  ${olStyled}
`;
const StyledList = styled.li<{ isActive: boolean }>`
  ${liStyled}
  ${(props) => (props.isActive ? active : '')}
`;
const Breadcrumb: React.FC<BreadcrumbProps> = ({ lists }) => {
  const [selected, setSelected] = React.useState('');
  const selectedValue = (e: any) => {
    setSelected(e.target.innerText);
  };
  return (
    <nav>
      <StyledOL>
        {lists?.map((list, index) => (
          <StyledList key={index} isActive={selected === list} onClick={selectedValue}>
            {list}
          </StyledList>
        ))}
      </StyledOL>
    </nav>
  );
};

export default Breadcrumb;
