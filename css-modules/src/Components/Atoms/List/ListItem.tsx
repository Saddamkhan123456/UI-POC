import React from 'react';
import styles from './List.module.css';
import Badge from '../Badge/Badge';
import Icon from '../../Icons/Icons';
import ArticleDetails from '../../Molecules/ArticleDetails/ArticleDetails';

interface ListItemProps {
  img: string;
  title: string;
  date: string;
  articleType: string;
  articleIcon: string;
  technology: string;
  author: string;
  impact: string;
}

const ListItem = ({ img, title, date, articleType, technology, author, articleIcon, impact }: ListItemProps) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.listItemImg}>
        <img src={img} />
      </div>
      <div className={styles.listItemDescription}>
        <div className={styles.listItemTopBox}>
          <h5>{title}</h5>
          <Icon kind='bookmark' size={16} />
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
