import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { ArrowIcon, Select, SelectWrapper } from './styles';
interface IDropdown {
  value?: any;
  onChange?: any;
  options?: any;
  label?: string;
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
      <ArrowIcon>
        <Icon kind='dropdown' width={14} height={8} />
      </ArrowIcon>
    </SelectWrapper>
  );
};

export default DropdownSelect;
