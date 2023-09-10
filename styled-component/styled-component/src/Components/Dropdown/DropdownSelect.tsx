import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { Select, SelectWrapper } from './styles';
interface IDropdown {
  value?: any;
  onChange?: any;
  options?: any;
  label?: any;
}

const DropdownSelect = ({ value, onChange, options, label }: IDropdown) => {
  return (
    <SelectWrapper>
      <Select value={value} onChange={onChange}>
        {options.map((option: IDropdown) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <span>
        <Icon kind='dropdown' width={14} height={8} />
      </span>
    </SelectWrapper>
  );
};

export default DropdownSelect;
