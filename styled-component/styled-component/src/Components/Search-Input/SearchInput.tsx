import React from 'react';
import Icon from '../../Assets/Icons/Icon';
import { SearchContainer, SearchIcon, SearchInputGroup, SearchInputField, SearchButton } from './styles';

export interface ISearchInput {
  isIcon: boolean;
}

const SearchInput = ({ isIcon }: ISearchInput) => {
  return (
    <SearchContainer>
      <SearchInputGroup>
        <SearchInputField type='text' placeholder='Search for Tech Digest, Hard Problems, Blogs, TL Articles…' />
        {isIcon ? (
          <SearchIcon>{<Icon kind='search' width={18} height={18} />}</SearchIcon>
        ) : (
          <SearchButton type='submit'>Search</SearchButton>
        )}
      </SearchInputGroup>
    </SearchContainer>
  );
};

export default SearchInput;
