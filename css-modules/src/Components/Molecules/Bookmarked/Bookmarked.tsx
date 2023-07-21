import React from 'react';
import styles from './Bookmarked.module.css';
import BookmarkedCard from '../../Atoms/Card/BookmarkedCard';
import { bookmarkedData } from './Data';

const Bookmarked = () => {
  return (
    <div className={styles.bookmarkWrapper}>
      <div className={styles.container}>
        <div className={styles.row}>
          {bookmarkedData.map((data, index) => (
            <div className={styles.bookmarkCard} key={index}>
              <BookmarkedCard
                cardSubHeading={data.cardSubHeading}
                cardSubText={data.cardSubText}
                backgroundImgUrl={data.backgroundImgUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmarked;
