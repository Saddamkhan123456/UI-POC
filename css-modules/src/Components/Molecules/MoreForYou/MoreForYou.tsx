import React from 'react';
import MoreForYouCard from '../../Atoms/Card/MoreForYouCard';
import { moreForYouData } from './Data';
import styles from './MoreForYou.module.css';

const MoreForYou = () => {
  return (
    <div className={styles.moreForYouWrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          {moreForYouData.map((data, index) => (
            <div className={styles.moreForYouCard} key={index}>
              <MoreForYouCard backgroundImgUrl={data.backgroundImgUrl} title={data.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreForYou;
