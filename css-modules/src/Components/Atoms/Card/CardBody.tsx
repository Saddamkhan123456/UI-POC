import React from 'react';
import styles from './Card.module.css';
import Icon from '../../Icons/Icons';

interface CardBodyProps {
  title?: string;
  categoryIcon?: string;
  isCardBottomBox?: boolean;
  cardSubHeading?: string;
  cardSubText?: string;
  cardType?: 'category-card' | 'tech-card' | 'bookmark' | 'moreFor-you';
  imgUrl?: string;
  alt?: string;
  isTechDigestImg?: boolean;
  backgroundImgUrl?: string;
}

const cardTypeClass = {
  'category-card': styles.categoryCard,
  'tech-card': styles.techCard,
  bookmark: styles.bookmark,
  'moreFor-you': styles.moreForYou,
};

const CardBody = ({
  title,
  categoryIcon,
  cardSubHeading,
  cardSubText,
  isCardBottomBox,
  cardType,
  imgUrl,
  alt,
  isTechDigestImg,
  backgroundImgUrl,
}: CardBodyProps) => {
  const cardName = cardType ? cardTypeClass[cardType] : '';
  const cardBackgroundImg = backgroundImgUrl ? { backgroundImage: `url(${backgroundImgUrl})` } : {};
  return (
    <div className={`${cardName}`}>
      <div className={styles.cardTopBox} style={cardBackgroundImg}>
        <Icon kind={categoryIcon} size={40} className={styles.cardIcon} />
        <h3>{title}</h3>
        {isTechDigestImg && <img src={imgUrl} alt={alt} />}
      </div>
      {isCardBottomBox && (
        <div className={styles.cardBottomBox}>
          <h6 className={styles.cardTitle}>{cardSubHeading}</h6>
          <p>{cardSubText}</p>
        </div>
      )}
    </div>
  );
};

export default CardBody;
