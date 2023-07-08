import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const dropdownStyles = css`
  position: relative;
  display: inline-block;
`;

const dropdownButtonStyles = css`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #dedeed;
  font-size: 1rem;
  color: #343434;
  background: #fff;
  cursor: pointer;
`;

const dropdownIconStyles = css`
  margin-left: 1rem;
  padding-top: 0.2rem;
`;

const dropdownContentStyles = css`
  margin-top: 0.5rem;
  position: absolute;
  width: 100%;
  min-width: 160px;
  border-radius: 0.25rem;
  border: 1px solid rgba(184, 188, 192, 0.25);
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  z-index: 1;
`;

const dropdownItemStyles = css`
  color: #000;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  color: #343434;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

interface DropdownProps {
  options: string[];
  selectedOption?: string;
}

const DropdownContainer = styled.div`
  ${dropdownStyles}
`;

const DropdownButton = styled.button`
  ${dropdownButtonStyles}
`;

const DropdownIcon = styled.span`
  ${dropdownIconStyles}
`;

const DropdownContent = styled.div`
  ${dropdownContentStyles}
`;

const DropdownItem = styled.a`
  ${dropdownItemStyles}
`;

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    selectedOption ? selectedOption : "Select an option"
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedValue = (e: any) => {
    setIsOpen(!isOpen);
    setSelected(e.target.innerText);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleDropdown}>
        {selected}
        <DropdownIcon>
          {isOpen ? <BsChevronUp /> : <BsChevronDown />}
        </DropdownIcon>
      </DropdownButton>
      {isOpen && (
        <DropdownContent>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={selectedValue}>
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
