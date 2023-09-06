import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { SearchContainer, SearchIcon, SearchInputGroup, SearchInputField, SearchButton } from './styles';

export interface ISearchInput {
  isIcon: boolean;
}

const SearchInput = ({ isIcon }: ISearchInput) => {
  return (
    <SearchContainer>
      {isIcon && <SearchIcon>{<Icon kind='search' />}</SearchIcon>}
      <SearchInputGroup>
        <SearchInputField type='text' placeholder='Search for Tech Digest, Hard Problems, Blogs, TL Articles…' />
        <SearchButton type='submit'>Search</SearchButton>
      </SearchInputGroup>
    </SearchContainer>
  );
};

export default SearchInput;
