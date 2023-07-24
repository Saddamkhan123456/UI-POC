import React, { useState } from 'react';
import DropdownSelect from './DropdownSelect';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <DropdownSelect options={options} value={selectedOption} onChange={handleSelectChange} />
    </div>
  );
};

export default Dropdown;
