import React from 'react';
import { styled } from '@mui/system';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { KbTechDigestCard } from './style';
interface TechDigestProps {
    title?: string | null;
    src?: string;
    alt?: string;
    link: string;
}

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
