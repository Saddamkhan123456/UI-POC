import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link, Typography } from '@mui/material';
import { SearchBox } from '../../Components/SearchBox/SearchBox';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import Icon from '../../Components/Icons/Icons';
import * as React from 'react';


interface HeaderProps {
    isSearch?: boolean;
    isBreadcrumb?: boolean;
}
const KbHeader = styled(AppBar)(() => ({
    paddingBlock: '1.644rem',
    paddingRight: '3.12rem',
    paddingLeft: '1.87rem',
    boxShadow: 'none',
    '& .logo': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .headerWrapper': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& .nav-breadcrumb': {
            marginLeft: '3.25rem',
        }
    },
    '& .header-search-box': {
        maxWidth: '100%',
        width: '23.25rem',
        '& .MuiButtonBase-root': {
            paddingInline: '0.938rem',
        },
        '& .MuiInputBase-root': {
            height: '2.125rem',
            '& .MuiInputBase-input': {
                height: '2.125rem',
                boxSizing: 'border-box',
            },
        },
        '& .MuiFormLabel-root': {
            fontSize: '0.75rem',
        },
    },
}));

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
            <Box className='headerWrapper'>
                <Box className='logo'>
                    <Link href='/'>
                        <Icon kind='logo' width={66} height={42} />
                    </Link>
                    {isBreadcrumb && <Breadcrumb isNavBreadcrumb breadcrumbs={breadcrumbs} />}
                </Box>
                {isSearch && (
                    <SearchBox
                        id='search'
                        labelText='Search for Hard Problems, Blogs, TL Articles…'
                        onlySearchIcon={true}
                        className='header-search-box'
                    />
                )
                }
            </Box>
        </KbHeader>
    );
};
