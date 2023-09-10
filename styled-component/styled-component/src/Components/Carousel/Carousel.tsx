import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../Assets/Icons/Icon';

const CarouselWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  gap: 1.875rem;
`;

const CarouselItem = styled.div`
  flex: 0 0 calc(25% - 1.875rem);
`;

const SliderButtonPrev = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
  z-index: 1;
`;

const SliderButtonNext = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
  z-index: 1;
`;

interface CarouselProps {
  items: JSX.Element[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <CarouselWrapper>
        <SliderButtonPrev onClick={prevSlide}>
          <Icon kind='arrow-prev' width={18} height={30} />
        </SliderButtonPrev>
        <CarouselContent style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}>
          {items.map((item, index) => (
            <CarouselItem key={index}>{item}</CarouselItem>
          ))}
        </CarouselContent>
        <SliderButtonNext onClick={nextSlide}>
          <Icon kind='arrow-next' width={18} height={30} />
        </SliderButtonNext>
      </CarouselWrapper>
    </>
  );
};

export default Carousel;
