import React from 'react';
import styles from './Categories.module.css';
import CategoryCard from '../../Atoms/Card/CategoryCard';
import { categoryData } from './Data';
import Divider from '../../Atoms/Divider/Divider';

const Categories = () => {
  return (
    <>
      <div className={styles.categoriesWrapper}>
        <div className={styles.row}>
          {categoryData.map((data, index) => (
            <div className={styles.categoryCard} key={index}>
              <CategoryCard title={data.title} categoryIcon={data.categoryIcon} href={data.href} />
            </div>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Categories;
