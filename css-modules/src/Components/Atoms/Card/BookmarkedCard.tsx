import React from 'react';
import Card from './Card';
import CardBody from './CardBody';

interface BookmarkedCardProps {
  cardSubHeading: string;
  cardSubText: string;
  backgroundImgUrl: string;
}

const BookmarkedCard = ({ cardSubHeading, cardSubText, backgroundImgUrl }: BookmarkedCardProps) => {
  return (
    <Card>
      <CardBody
        isCardBottomBox={true}
        cardSubHeading={cardSubHeading}
        cardSubText={cardSubText}
        backgroundImgUrl={backgroundImgUrl}
        cardType='bookmarked'
      />
    </Card>
  );
};

export default BookmarkedCard;
