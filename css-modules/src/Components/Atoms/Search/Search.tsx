import React from 'react';
import styles from './Search.module.css';
import Icon from '../../Icons/Icons';

interface SearchProps {
  isSearchIcon?: boolean;
  searchVariant?: 'searchSm' | 'searchLg';
  isSearchText?: boolean;
  className?: string;
}

const Search = ({ isSearchIcon, searchVariant, isSearchText, className }: SearchProps) => {
  return (
    <form className={`${styles.search} ${styles[searchVariant || 'searchLg']} ${className}`}>
      <input
        type='text'
        className={styles.formControl}
        placeholder='Search for Tech Digest, Hard Problems, Blogs, TL Articles…'
      />
      <button type='button' className={styles.searchPrimaryBtn}>
        {isSearchText && 'Search'}
        {isSearchIcon && <Icon kind='search' size={18} />}
      </button>
    </form>
  );
};

export default Search;
