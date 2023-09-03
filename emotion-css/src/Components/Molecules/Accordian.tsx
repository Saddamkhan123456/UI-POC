import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

interface AccordianProps {
  label: string;
  listItems?: string[];
}

interface ListItem {
  name: string;
}

const accordian = css`
  display: flex;
  flex-direction: column;
  background: #fff;
`;

const accordianHeader = css`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  position: relative;
  padding: 0.5rem 0 0.5rem 1.5rem;
  justify-content: space-between;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 0.25rem;
    height: 100%;
    left: 0;
    border-radius: 0.125rem;
    background: #0b93df;
  }
`;

const unorderedList = css`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

const listItem = css`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  line-height: 1.148;
  color: #343434;
`;

const label = css`
  font-size: 1rem;
  font-weight: 500;
  color: #343434;
  line-height: 1.148;
`;

const StyledAccordian = styled.div`
  ${accordian}
`;

const StyledAccordianHeader = styled.div`
  ${accordianHeader}
`;

const StyledUL = styled.ul`
  ${unorderedList}
`;

const StyledListItem = styled.div`
  ${listItem}
`;

const StyledAccordianLabel = styled.p`
  ${label}
`;

const Accordian: React.FC<AccordianProps> = ({ label, listItems }) => {
  const [open, setOpen] = React.useState<boolean>(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <>
      <StyledAccordian onClick={handleOpen}>
        <StyledAccordianHeader>
          <StyledAccordianLabel>{label}</StyledAccordianLabel>
          {open ? <FaAngleUp /> : <FaAngleDown />}
        </StyledAccordianHeader>
        {open ? (
          <StyledUL>
            {listItems?.map((item: string) => (
              <StyledListItem key={item}>{item}</StyledListItem>
            ))}
          </StyledUL>
        ) : null}
      </StyledAccordian>
    </>
  );
};

export default Accordian;
