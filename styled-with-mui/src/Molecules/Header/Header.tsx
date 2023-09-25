import { Box } from '@mui/material';
import { Link, Typography } from '@mui/material';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Icon from '../../Components/Icons/Icons';
import * as React from 'react';
import { HeaderWrapper, KbHeader, KbLogo } from './style';

interface HeaderProps {
    isSearch?: boolean;
    isBreadcrumb?: boolean;
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
        Home
    </Link>,
    <Typography key="3">
        Recommended
    </Typography>,
];

export const Header = ({ isSearch, isBreadcrumb }: HeaderProps) => {
    return (
        <KbHeader color='inherit' position='sticky'>
            <HeaderWrapper>
                <KbLogo>
                    <Link href='/'>
                        <Icon kind='logo' width={66} height={42} />
                    </Link>
                    {isBreadcrumb && <Breadcrumb isNavBreadcrumb breadcrumbs={breadcrumbs} />}
                </KbLogo>
                {isSearch && (
                    <SearchBox
                        id='search'
                        labelText='Search for Hard Problems, Blogs, TL Articles…'
                        onlySearchIcon={true}
                        className='header-search-box'
                    />
                )
                }
            </HeaderWrapper>
        </KbHeader>
    );
};
