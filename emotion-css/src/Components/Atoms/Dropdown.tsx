import React, { useEffect, useState } from "react";
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
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid #dedeed;
  min-width: 180px;
  font-size: 1rem;
  color: #343434;
  background: #fff;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const dropdownIconStyles = css`
  margin-left: 1rem;
  padding-top: 0.2rem;
`;

const dropdownContentStyles = css`
  margin-top: 0.5rem;
  position: absolute;
  width: 100%;
  min-width: 180px;
  border-radius: 0.25rem;
  border: 1px solid rgba(184, 188, 192, 0.25);
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  z-index: 1;
  background: #fff;
`;

const dropdownItemStyles = css`
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

const dropdownItemSelectedStyles = css`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  color: #343434;
  cursor: pointer;
  background-color: #f0f0f0;
`;

interface DropdownProps {
  options: string[];
  selectedOption?: string;
  placeholder?: string;
  onClick?: (e: any) => void;
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

const DropdownItem = styled.a<{ isSelected: boolean }>`
  ${(props) =>
    props.isSelected ? dropdownItemSelectedStyles : dropdownItemStyles}
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onClick,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(
    selectedOption ? selectedOption : placeholder
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectedValue = (e: any) => {
    setIsOpen(!isOpen);
    setSelected(e.target.innerText);
  };

  useEffect(() => {
    selected !== placeholder && onClick && onClick(selected);
  }, [selected]);

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
            <DropdownItem
              key={index}
              isSelected={option === selected}
              onClick={selectedValue}
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
