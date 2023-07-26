import React from 'react';
import Card from './Card';
import CardBody from './CardBody';

interface MoreForYouProps {
  backgroundImgUrl: string;
  title: string;
  href: string;
}

const MoreForYouCard = ({ backgroundImgUrl, title, href }: MoreForYouProps) => {
  return (
    <Card>
      <CardBody href={href} backgroundImgUrl={backgroundImgUrl} title={title} cardType='moreFor-you' />
    </Card>
  );
};

export default MoreForYouCard;
