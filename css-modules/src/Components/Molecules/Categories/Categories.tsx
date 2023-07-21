import React from 'react';
import styles from './Categories.module.css';
import CategoryCard from '../../Atoms/Card/CategoryCard';
import { categoryData } from './Data';

const Categories = () => {
  return (
    <div className={styles.CategoriesWrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          {categoryData.map((data, index) => (
            <div className={styles.categoryCard} key={index}>
              <CategoryCard title={data.title} categoryIcon={data.categoryIcon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
