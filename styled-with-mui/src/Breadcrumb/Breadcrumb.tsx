import { Breadcrumbs } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';
import Icon from '../Icons/Icons';
import { breadcrumbData } from './data';
import styled from '@mui/system/styled';

const KBreadcrumb = styled(Breadcrumbs)(({ theme }) => ({
    fontSize: '0.875rem',
    fontFamily: 'ubuntu, sans-serif',
    "& .icon": {
        marginRight: theme.spacing(0.5),
    },
}));

export const Breadcrumb = () => {
    return (
        <KBreadcrumb separator={<>{'|'}</>} aria-label='breadcrumb'>
            {breadcrumbData.map((item, i) => (
                <Link
                    className='breadcrumb-link'
                    underline="none"
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color={item.isActive === true ? "info" : "inherit"}
                    href="/"
                >
                    <Icon kind={item.icon} className='mr-2 d-block icon' />
                    {item.name}
                </Link>
            ))}
        </KBreadcrumb>
    );
};

export default Breadcrumb;
