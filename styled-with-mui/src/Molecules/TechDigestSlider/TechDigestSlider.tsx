import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, Typography } from '@mui/material';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperBox, TechDigestHeader } from './style';
import { techDigestData } from './data';
import { TechDigestCard } from '../../Components/Card/TechDigestCard';
interface CarouselProps {
    techData?: any;
}

const Carousel = ({ techData }: CarouselProps) => {
    return (
        <SwiperBox>
            <Container sx={{ maxWidth: '1300px' }}>
                <TechDigestHeader variant='h4'>Popular Tech Digest</TechDigestHeader>
                <>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        loop={true}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {techDigestData.map((item: any) => (
                            <SwiperSlide>
                                <TechDigestCard link={item.href} src={item.imgUrl} title={item.techDigestName} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            </Container>

        </SwiperBox>
    );
};

export default Carousel;
