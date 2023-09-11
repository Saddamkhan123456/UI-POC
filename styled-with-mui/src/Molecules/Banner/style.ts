import { Box, styled } from '@mui/material';

export const KBanner = styled(Box)((isSearchResult) => ({
    paddingTop: '4.56rem',
    paddingBottom: '10rem',
    background: '#fff',
    '&.bg-transperant': {
        background: 'transparent',
    },
    '& .logo': {
        display: 'flex',
        alignItems: 'center',
    },
}));