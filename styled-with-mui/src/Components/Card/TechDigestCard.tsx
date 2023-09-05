import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
interface TechDigestProps {
    title?: string | null;
    src?: string;
    alt?: string;
    link: string;
}

const KbTechDigestCard = styled(Box)(({ theme }) => ({
    maxWidth: '15.625rem',
    '& .cardContainer': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
    },
    '& .tech-digest-img': {
        width: '15.625rem',
        height: '6.25rem',
        // padding: '0.25rem 1rem',
        boxShadow: '0px 0px 10px 0px #B8BCC040',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '&. card-img': {
            width: '100%',
        }
    },
    '& .tech-digest-title': {
        color: '#343434',
        fontSize: '1.25rem',
        lineHeight: 1.1,
        fontWeight: 500,
        marginTop: '1rem',
        textDecoration: 'none',
        '& :hover': {

        }
    }

}));

export const TechDigestCard = ({ title, src, link, alt }: TechDigestProps) => {
    return (
        <KbTechDigestCard>
            <Link to={link} className='cardContainer'>
                <Box component="div" className="tech-digest-img">
                    <img className='card-img' src={src} alt={alt} />
                </Box>
                <Typography variant='h6' className='tech-digest-title'>
                    {title}
                </Typography>
            </Link>
        </KbTechDigestCard>
    );
};
