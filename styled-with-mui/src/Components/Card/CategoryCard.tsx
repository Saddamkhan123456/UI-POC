import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icons/Icons';
// import DefaultIcon from '../../../assets/images/defaultIcon.svg';


interface CategoryProps extends CategoryNameProps, CategoryIconProps {
    link: string;
}
interface CategoryNameProps {
    categoryName: string;
}
interface CategoryIconProps {
    icon: string;
    alt: string;
}

const KbCategoryName = styled(Typography)(({ theme }) => ({
    maxWidth: '8.563rem',
    textAlign: 'center',
    marginTop: '1rem',
    color: theme.palette.primary.dark,
    fontWeight: 500,
}));

export const CategoryName = ({ categoryName }: CategoryNameProps) => {
    return <KbCategoryName variant='h3' > {categoryName}</KbCategoryName>;
};

const KbCategoryCard = styled(Link)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    textDecoration: 'none',
    alignItems: 'center',
    '& .categoryCardInner': {
        boxShdow: '0 0 0.625rem rgba(184, 188, 192, 0.25)',
        borderRadius: '0.75rem',
        border: 0,
        minHeight: '11.25rem',
        flexDirection: 'column',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& img': {
            maxWidth: '3.125rem',
        },
    },
}))

export const CategoryCard = ({ categoryName, link, icon, alt }: CategoryProps) => {
    return (
        <KbCategoryCard to={link}>
            <Card className='categoryCardInner'>
                <CategoryIcon icon={icon} alt={alt} />
                <CategoryName categoryName={categoryName} />
            </Card>
        </KbCategoryCard>
    );
};

export const CategoryIcon = ({ icon, alt }: CategoryIconProps) => {
    return <>
        <Icon kind={icon} size={40} />
    </>;
};
