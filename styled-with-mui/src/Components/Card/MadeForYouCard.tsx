import { Box, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

interface MadeForYouProps {
    link: string;
    title: string;
    src: string;
    alt: string;
}

const KbMadeForYouCard = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.primary,
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'column',
    width: '354px',
    height: '180px',
    borderRadius: '0.37rem',
    position: 'relative',
    flexShrink: 0,
    "& .img-wrap": {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: "0.375rem",
        zIndex: 1,
        "& :before": {
            content: '" "',
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            background: '#e5e5e5',
            opacity: 0,
            transition: '.5s ease all',
        }
    },
    "& .card-img": {
        transition: '.5s ease all',
        objectFit: 'cover',
        width: '100%',
        "&:hover": {
            transform: "scale(1.1)",
        }
    },
    "& .heading": {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        color: theme.palette.common.white,
        fontSize: '1.5rem',
        fontWeight: 500,
        textAlign: 'center',
        whiteSpace: 'nowrap',
    }
}));

export const MadeForYouCard = ({ link, title, src, alt }: MadeForYouProps) => {
    return (
        <KbMadeForYouCard to={link}>
            <Box className='img-wrap'>
                <img className='card-img' src={src} alt={alt} />
            </Box>
            <Typography variant='h6' className='heading'>
                {title}
            </Typography>
        </KbMadeForYouCard>
    );
};
