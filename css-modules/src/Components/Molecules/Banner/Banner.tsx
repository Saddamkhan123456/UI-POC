import React from 'react';
import styles from './Banner.module.css';
import Search from '../../Atoms/Search/Search';
import Dropdown from '../../Atoms/Dropdown/Dropdown';
import Categories from '../Categories/Categories';
import { categoriesData, productName, techData, tagData } from './Data';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerInner}>
        <h2 className={styles.bannerTitle}>Hello, how may I help you ?</h2>
        <Search isSearchText={true} className={styles.searchBox} />
        <div className={styles.dropdownGroup}>
          <Dropdown
            className={styles.dropdownWidth}
            defaultLabel='Categories'
            dropdownItems={categoriesData}
            value=''
          />
          <Dropdown className={styles.dropdownWidth} defaultLabel='Tech' dropdownItems={techData} value='' />
          <Dropdown className={styles.dropdownWidth} defaultLabel='Product Name' dropdownItems={productName} value='' />
          <Dropdown className={styles.dropdownWidth} defaultLabel='Tags' dropdownItems={tagData} value='' />
        </div>
      </div>
    </div>
  );
};

export default Banner;
