import React from "react";
import styles from "./Bookmarked.module.css";
import BookmarkedCard from "../../Atoms/Card/BookmarkedCard";
import { bookmarkedData } from "./Data";
import Heading from "../../Atoms/Heading/Heading";
import Divider from "../../Atoms/Divider/Divider";
import ViewMore from "../../Atoms/ViewMore/ViewMore";

const Bookmarked = () => {
  return (
    <>
      <div className={styles.bookmarkWrapper}>
        <Heading label="Bookmarked" />
        <div className={styles.row}>
          {bookmarkedData.map((data, index) => (
            <div className={styles.bookmarkCard} key={index}>
              <BookmarkedCard
                cardSubHeading={data.cardSubHeading}
                cardSubText={data.cardSubText}
                backgroundImgUrl={data.backgroundImgUrl}
                href={data.href}
              />
            </div>
          ))}
        </div>
        <div className={styles.viewMoreAlignment}>
          <ViewMore label="view more" href="/" />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Bookmarked;
