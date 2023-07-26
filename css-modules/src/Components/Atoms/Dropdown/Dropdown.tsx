import React from 'react';
import styles from './Dropdown.module.css';

interface DropdownProps {
  defaultLabel: string;
  dropdownItems: { label: string; value: string }[];
  value: string;
  className?: string;
}

const Dropdown = ({ defaultLabel, dropdownItems, value, className }: DropdownProps) => {
  return (
    <select className={`${styles.formSelect} ${className}`} value={value}>
      <option value=''>{defaultLabel}</option>
      {dropdownItems.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
