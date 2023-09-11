import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import styled from 'styled-components';
import Icon from '../Icons/Icons';
import { alpha } from '@mui/material/styles';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';
import { StyledIconButton, StyledMenu, StyledMenuItem } from './style';

interface IDropdownMenuProps {
    value?: string;
    id?: string;
}

const DropdownMenu = ({ value, id }: IDropdownMenuProps) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledIconButton
                aria-controls="custom-menu"
                aria-haspopup="true"
                onClick={handleMenuOpen}
            >
                <Typography>
                    {value}
                </Typography>
                <Icon width={14} kind={'caret-down'} />
            </StyledIconButton>
            <StyledMenu
                id="custom-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                // spacing={theme.spacing(1)}
                theme={theme}
            >
                <StyledMenuItem onClick={handleMenuClose}>Option 1</StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose}>Option 2</StyledMenuItem>
                <StyledMenuItem onClick={handleMenuClose}>Option 3</StyledMenuItem>
            </StyledMenu>
        </ThemeProvider>
    );
}

export default DropdownMenu;
