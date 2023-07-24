import React from 'react';
import styles from './Bookmarked.module.css';
import BookmarkedCard from '../../Atoms/Card/BookmarkedCard';
import { bookmarkedData } from './Data';
import Heading from '../../Atoms/Heading/Heading';
import Divider from '../../Atoms/Divider/Divider';

const Bookmarked = () => {
  return (
    <div className={styles.bookmarkWrapper}>
      <Heading label='Bookmarked' />
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
      <Divider />
    </div>
  );
};

export default Bookmarked;
