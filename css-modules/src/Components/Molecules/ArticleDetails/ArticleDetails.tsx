import React from 'react';
import Badge from '../../Atoms/Badge/Badge';
import styles from './ArticleDetails.module.css';

interface ArticleDetailsProps {
  articleType: string;
  articleIcon: string;
  technology: string;
  author: string;
}

const ArticleDetails = ({ articleType, technology, author, articleIcon }: ArticleDetailsProps) => {
  return (
    <ul className={styles.articleDetail}>
      <li>
        <Badge label={articleType} isIcon={true} icon={articleIcon} size={20} />
      </li>
      <li>
        <Badge label={technology} isIcon={true} icon='technology' size={20} />
      </li>
      <li>
        <Badge label={author} isIcon={true} icon='author' size={20} />
      </li>
    </ul>
  );
};

export default ArticleDetails;
