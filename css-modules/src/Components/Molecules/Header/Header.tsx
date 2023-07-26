import React from 'react';
import styles from './Header.module.css';
import Icon from '../../Icons/Icons';
import Breadcrumb from '../../Atoms/Breadcrumb/Breadcrumb';
import Search from '../../Atoms/Search/Search';

interface HeaderProps {
  isBreadcrumb?: boolean;
  isSearch?: boolean;
}

const Header = ({ isBreadcrumb, isSearch }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <div className={styles.leftHeader}>
        <a href='/' className={styles.logo}>
          <Icon kind='logo' size={72} />
        </a>
        {isBreadcrumb && <Breadcrumb />}
      </div>
      {isSearch && (
        <div className={styles.rightHeader}>
          <Search searchVariant='searchSm' isSearchIcon={true} />
        </div>
      )}
    </div>
  );
};

export default Header;
