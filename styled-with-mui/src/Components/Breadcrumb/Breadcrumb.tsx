import { Box, Breadcrumbs, List, ListItem } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Icon from '../Icons/Icons';
import { breadcrumbData } from './data';
import styled from '@mui/system/styled';
import { KBreadcrumb, KNavBreadcrumb } from './style';

interface BreadcrumbsProps {
    isNavBreadcrumb?: boolean;
    breadcrumbs?: any;

}

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
