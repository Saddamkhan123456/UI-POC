import React from "react";
import CardBody from "./CardBody";

interface TechDigestCardProps {
  imgUrl: string;
  alt?: string;
  techDigestName: string;
  href: string;
}

const TechDigestCard = ({ imgUrl, alt, techDigestName, href }: TechDigestCardProps) => {
  return (
    <CardBody
      cardType="tech-card"
      isTechDigestImg={true}
      isCardBottomBox={true}
      imgUrl={imgUrl}
      alt={alt}
      cardSubHeading={techDigestName}
      href={href}
    />
  );
};

export default TechDigestCard;
