import { Box, Typography, styled } from '@mui/material';

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

export const BannerBox = styled(Box)(() => ({
    maxWidth: '48.25rem',
    margin: '0 auto'
}));

export const BannerHeader = styled(Typography)(() => ({
    textAlign: 'center',
    marginBottom: '1.875rem'
}));

export const DropdownWrapper = styled(Box)(() => ({
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'space-between'
}))