import { Box, Breadcrumbs, List, ListItem } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Icon from '../Icons/Icons';
import { breadcrumbData } from './data';
import styled from '@mui/system/styled';

interface BreadcrumbsProps {
    isNavBreadcrumb?: boolean;
    breadcrumbs?: any;

}

const KNavBreadcrumb = styled(Breadcrumbs)(({ theme }) => ({
    fontSize: '1.25rem',
    lineHeight: '1.15',
    color: '#343434',
    "& p": {
        fontSize: '1.25rem',
        lineHeight: '1.15',
        color: '#343434',
        fontWeight: 500,
    },
}));

const KBreadcrumb = styled(Breadcrumbs)(({ theme }) => ({
    fontSize: '0.875rem',
    fontFamily: 'Ubuntu, sans-serif',
    color: '#666666',
    marginBottom: '0.625rem',
    "& .icon": {
        marginRight: theme.spacing(0.5),
    },
    "& .breadcrumb-hard-problem": {
        color: '#4556AF',
    },
    "& .MuiBreadcrumbs-separator .separator:before": {
        content: '" "',
        display: 'block',
        width: '1px',
        height: '1.18rem',
        background: '#666',
        borderRadius: '0.25rem',
    },
}));

export const Breadcrumb = ({ isNavBreadcrumb, breadcrumbs }: BreadcrumbsProps) => {
    if (isNavBreadcrumb) {
        return (
            <KNavBreadcrumb
                className='nav-breadcrumb'
                separator={<>{'>'}</>}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </KNavBreadcrumb>
        )
    } else return (
        <>
            <KBreadcrumb separator={<Box className='separator' component={'span'}></Box>} aria-label='breadcrumb'>
                {breadcrumbData.map((item, i) => (
                    <Link
                        className={(item.icon === 'hard-problem') ? 'breadcrumb-hard-problem breadcrumb-link' : 'breadcrumb-link'}
                        underline="none"
                        sx={{ display: 'flex', alignItems: 'center' }}
                        color={item.isActive === true ? "info" : "inherit"}
                        href="/"
                    >
                        <Icon kind={item.icon} size={20} className='mr-2 d-block icon' />
                        {item.name}
                    </Link>
                ))}
            </KBreadcrumb>
        </>
    );
};

export default Breadcrumb;
