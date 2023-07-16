import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "../../Assets/Icons";

interface IDropdownProps {
  options: string[];
  selectedOption?: string;
  placeholder?: string;
  onClick?: (e: any) => void;
}

const DropdownRoot = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownToggle = styled.button`
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0.61rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid #dedeed;
  min-width: 180px;
  font-size: 1rem;
  color: #343434;
  background: #fff;
  cursor: pointer;
`;

const DropdownIcon = styled.span`
  display: flex;
`;

const DropdownMenu = styled.div`
  margin-top: 0.5rem;
  position: absolute;
  width: 100%;
  min-width: 180px;
  border-radius: 0.375rem;
  background: #ffffff;
  border: 1px solid rgba(184, 188, 192, 0.25);
  box-shadow: 0px 0px 10px 0px rgba(184, 188, 192, 0.25);
  z-index: 1;
`;

const DropdownOption = styled.a<{ isSelected: boolean }>`
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 1rem;
  color: #343434;
  cursor: pointer;
  background: ${(props) => (props.isSelected ? "#ececfb" : "#fffff")};
  &:hover {
    background: #ececfb;
  }
`;

const Dropdown: React.FC<IDropdownProps> = ({
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
    setIsOpen(false);
    setSelected(e.target.innerText);
  };

  const handleIcon = () => {
    setSelected(placeholder);
  };

  useEffect(() => {
    selected !== placeholder && onClick && onClick(selected);
  }, [selected]);

  return (
    <DropdownRoot>
      <DropdownToggle onClick={toggleDropdown}>
        {selected}
        <DropdownIcon>
          {selected === placeholder ? (
            <Icon kind="chevronDown" width={14} height={8} />
          ) : (
            <Icon kind="close" size={14} onClick={handleIcon} />
          )}
        </DropdownIcon>
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu>
          {options?.map((option) => (
            <DropdownOption
              key={option}
              isSelected={option === selected}
              onClick={selectedValue}
            >
              {option}
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  );
};

export default Dropdown;
