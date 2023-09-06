import React from 'react';
import { DropdownSection, HeaderSearchSection, SubHeaderSection } from './styles';
import SearchInput from '../../Components/Search-Input/SearchInput';
import { TEXT_CONSTANTS } from '../../Utils/Constants';
import Dropdown from '../../Components/Dropdown/Dropdown';
import { H1 } from '../../Assets/Styles/Utils';

const dropdownData = [
  { id: 1, label: 'Categories' },
  { id: 2, label: 'Tech' },
  { id: 2, label: 'Product Name' },
  { id: 2, label: 'Tags' },
];

const HeaderTopSection = () => {
  return (
    <SubHeaderSection>
      <H1>{TEXT_CONSTANTS.HOME_PAGE_HEADING}</H1>
      <HeaderSearchSection>
        <SearchInput isIcon={false} />
      </HeaderSearchSection>
      <DropdownSection>
        {dropdownData.map((item) => (
          <Dropdown key={item.id} />
        ))}
      </DropdownSection>
    </SubHeaderSection>
  );
};

export default HeaderTopSection;
