import React from 'react';
import SearchInput from './SearchInput';
export default {
  title: 'Component/SearchInput',
  component: SearchInput,
  //   tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Search = () => {
  <>
    <SearchInput isIcon={true} />
  </>;
};
