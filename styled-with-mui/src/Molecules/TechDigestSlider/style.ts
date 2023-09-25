import { Box, Typography, styled } from '@mui/material';


export const SwiperBox = styled(Box)(() => ({
    position: 'relative',
    borderBottom: '1px solid #BEBEBE',
    paddingBlock: '3.125rem',
    marginBottom: '2.5rem',
    "& .swiper": {
        width: '100%',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '0 2.18rem 0 2.18rem',
    },
    "& .swiper-button-prev, & .swiper-button-next" : {
        top: '2.5rem',
        "&:after" : {
            color: '#898989',
            fontSize: '1.25rem'
        }
        
    },
}));

export const TechDigestHeader = styled(Typography)(() => ({
    marginBottom: '1.5rem',
    textAlign: 'center'
}));
