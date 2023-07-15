import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Carousel from "react-multi-carousel";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import "react-multi-carousel/lib/styles.css";
import CardComponent from "../Atoms/Card";

// Define your carousel item styles using Emotion Styled

const carouselItemStyle = css`
  padding: 0.2rem 0.675rem;
`;

const carouselItemCaption = css`
  padding-top: 1rem;
  color: #343434;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  text-align: center;
`;

const carouselNextButtonStyle = css`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #898989;
`;

const carouselPrevButtonStyle = css`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #898989;
`;

const carouselItemImageWrapperStyle = css`
  width: 100%;
  height: 94px;
  text-align: center;
`;

const carouselItemImageStyle = css`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const CarouselItem = styled.div`
  ${carouselItemStyle}
`;

const CarouselNextButton = styled.div`
  ${carouselNextButtonStyle}
`;

const CarouselPrevButton = styled.div`
  ${carouselPrevButtonStyle}
`;

const CarouselItemCaption = styled.div`
  ${carouselItemCaption}
`;

const CarouselItemImageWrapper = styled.div`
  ${carouselItemImageWrapperStyle}
`;

const CarouselItemImage = styled.img`
  ${carouselItemImageStyle}
`;

interface Item {
  id: string;
  image: string;
  name: string;
}
interface Count {
  desktop: number;
  tablet: number;
  mobile: number;
}

interface CarouselProps {
  items: Item[];
  itemCounts?: Count[];
}

const ItemsCarousel: React.FC<CarouselProps> = ({ items, itemCounts }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: itemCounts ? itemCounts[0].desktop : 7,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: itemCounts ? itemCounts[0].tablet : 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: itemCounts ? itemCounts[0].mobile : 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      infinite={true}
      centerMode={true}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={300}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
    >
      {items.map((item) => (
        <CarouselItem key={item.id}>
          <CardComponent style={{ padding: 0 }}>
            <CarouselItemImageWrapper>
              <CarouselItemImage src={item.image} alt={item.name} />
            </CarouselItemImageWrapper>
          </CardComponent>
          <CarouselItemCaption>{item.name}</CarouselItemCaption>
        </CarouselItem>
      ))}
    </Carousel>
  );
};
const CustomLeftArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <CarouselPrevButton onClick={onClick}>
      <FaAngleLeft size={30} />
    </CarouselPrevButton>
  );
};

// Custom Right Arrow component using React icon
const CustomRightArrow: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <CarouselNextButton onClick={onClick}>
      <FaAngleRight size={30} />
    </CarouselNextButton>
  );
};

export default ItemsCarousel;
