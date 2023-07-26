import React from 'react';
import Card from './Card';
import CardBody from './CardBody';

interface TechDigestCardProps {
  imgUrl: string;
  alt?: string;
  techDigestName: string;
  href: string;
}

const TechDigestCard = ({ imgUrl, alt, techDigestName, href }: TechDigestCardProps) => {
  return (
    <Card>
      <CardBody
        cardType='tech-card'
        isTechDigestImg={true}
        isCardBottomBox={true}
        imgUrl={imgUrl}
        alt={alt}
        cardSubHeading={techDigestName}
        href={href}
      />
    </Card>
  );
};

export default TechDigestCard;
