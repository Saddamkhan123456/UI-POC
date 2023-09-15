import React from "react";
import styles from "./Search.module.css";
import Icon from "../../Icons/Icons";

interface SearchProps {
  isSearchIcon?: boolean;
  searchVariant?: "sm" | "lg";
  isSearchText?: boolean;
  className?: string;
  placeholder?: string;
  onClick?: () => void;
}

const Search = ({ isSearchIcon, searchVariant, isSearchText, className, placeholder, onClick }: SearchProps) => {
  return (
    <form className={`${styles.search} ${styles[searchVariant || "lg"]} ${className}`}>
      <input type="text" className={styles.formControl} placeholder={placeholder} />
      <button type="button" className={styles.searchPrimaryBtn} onClick={onClick}>
        {isSearchText && "Search"}
        {isSearchIcon && <Icon kind="search" size={18} />}
      </button>
    </form>
  );
};

export default Search;
