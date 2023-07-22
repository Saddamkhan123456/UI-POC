import React from 'react';
import Card from './Card';
import CardBody from './CardBody';

interface MoreForYouProps {
  backgroundImgUrl: string;
  title: string;
}

const MoreForYouCard = ({ backgroundImgUrl, title }: MoreForYouProps) => {
  return (
    <Card>
      <CardBody backgroundImgUrl={backgroundImgUrl} title={title} cardType='moreFor-you' />
    </Card>
  );
};

export default MoreForYouCard;
