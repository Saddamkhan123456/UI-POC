import React, { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// Core modules imports are same as usual
import SwiperCore from 'swiper';
import Navigation from 'swiper';

// import styles from './Carousel.module.css';
import { TechDigestCard } from '../../Components/Card/TechDigestCard';
import Icon from '../../Components/Icons/Icons';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/system';

SwiperCore.use([Navigation]); // Initialize Swiper core modules

// const KbSwiper = styled(SwiperComponent)(({ theme }) => ({
//     marginInline: '5rem'
// }));

const KbSwiperButton = styled(Button)(({ theme }) => ({
    position: "absolute",
    top: '1.875rem',
    padding: 0,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    '&.swiper-button-prev': {
        left: 0,
    },
    '&.swiper-button-next': {
        right: 0,
    },
}));



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
    techData: any;
}

const Carousel = ({ techData }: CarouselProps) => {
    const [nextEl, nextElRef] = useSwiperRef<HTMLButtonElement>();
    const [prevEl, prevElRef] = useSwiperRef<HTMLButtonElement>();
    return (
        <Box position={'relative'}>
            slider
            {/* <SwiperComponent
                navigation={{
                    prevEl,
                    nextEl,
                }}
                modules={[Navigation]}
            // className={styles.techDigestCarousel}
            >
                {techData.map((item: any) => (
                    <SwiperSlide>
                        <TechDigestCard link={item.href} src={item.imgUrl} title={item.techDigestName} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>
            <KbSwiperButton ref={prevElRef} className={'swiper-button-prev'}>
                <Icon kind='prev' size={30} />
            </KbSwiperButton>
            <KbSwiperButton ref={nextElRef} className={'swiper-button-next'}>
                <Icon kind='next' size={30} />
            </KbSwiperButton> */}
        </Box>
    );
};

export default Carousel;
