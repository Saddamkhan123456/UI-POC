import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { SearchContainer, SearchIcon, SearchInputField } from './styles';
export interface ISearchInput {
  isIcon: boolean;
}
const SearchInput = ({ isIcon }: ISearchInput) => {
  return (
    <SearchContainer>
      <SearchIcon>{isIcon && <Icon kind='search' />} search</SearchIcon>
      <SearchInputField type='text' placeholder='Search...' />
    </SearchContainer>
  );
};

export default SearchInput;
