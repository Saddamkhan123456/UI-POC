import React from "react";
import styles from "./List.module.css";
import Badge from "../Badge/Badge";
import Icon from "../../Icons/Icons";
import ArticleDetails from "../../Molecules/ArticleDetails/ArticleDetails";

interface ListItemProps {
  img: string;
  title: string;
  date: string;
  articleType: string;
  articleIcon: string;
  technology: string;
  author: string;
  impact: string;
  imageSize: "sm" | "md";
}

const ListItem = ({
  img,
  title,
  date,
  articleType,
  technology,
  author,
  articleIcon,
  impact,
  imageSize,
}: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <a href="/" className={`${styles.listItemImg} ${styles[imageSize]}`}>
        <img src={img} />
      </a>
      <div className={styles.listItemDescription}>
        <div className={styles.listItemTopBox}>
          <a href="/">{title}</a>
          <Icon kind="bookmark" size={16} />
        </div>
        <div className={styles.listItemMedium}>
          <ArticleDetails articleType={articleType} articleIcon={articleIcon} technology={technology} author={author} />
        </div>
        <div className={styles.listItemBottomBox}>
          <Badge label={impact} />
          <span>{date}</span>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
