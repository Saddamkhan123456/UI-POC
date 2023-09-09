import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Container, Typography } from '@mui/material';
// import Swiper core and required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { SwiperBox } from './style';
import { techDigestData } from './data';
import { TechDigestCard } from '../../Components/Card/TechDigestCard';
import Aerospike from '../../Assets/Images/aerospike.png';
import ApacheKafka from '../../Assets/Images/apache-kafka.png';
import Purescript from '../../Assets/Images/purescript.png';
import Redis from '../../Assets/Images/redis.png';

interface CarouselProps {
    techData: any;
}

const Carousel = ({ }: CarouselProps) => {
    return (
        <SwiperBox>
            <Container sx={{ maxWidth: '1300px' }}>
                <Typography variant='h4' style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Popular Tech Digest</Typography>

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
