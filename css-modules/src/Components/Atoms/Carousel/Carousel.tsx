import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Icon from '../../Icons/Icons';
import styles from './Carousel.module.css';
import TechDigestCard from '../Card/TechDigestCard';
import { techDigestData } from '../../Molecules/TechDigest/Data';

const useSwiperRef = <T extends HTMLElement>(): [T | null, React.Ref<T>] => {
  const [wrapper, setWrapper] = useState<T | null>(null);
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      setWrapper(ref.current);
    }
  }, []);

  return [wrapper, ref];
};

interface CarouselProps {
  children?: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
  const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
  return (
    <div className={styles.carouselContainer}>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        navigation={{
          prevEl,
          nextEl,
        }}
        modules={[Navigation]}
        className={styles.techDigestCarousel}
      >
        {techDigestData.map((item) => (
          <SwiperSlide>
            <TechDigestCard key={item.id} imgUrl={item.imgUrl} techDigestName={item.techDigestName} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button ref={prevElRef} className={styles.swiperPrevButton}>
        <Icon kind='prev' size={30} />
      </button>
      <button ref={nextElRef} className={styles.swiperNextButton}>
        <Icon kind='next' size={30} />
      </button>
    </div>
  );
};

export default Carousel;
