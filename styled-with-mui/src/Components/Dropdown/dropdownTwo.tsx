import React, { useState } from 'react';
import { Menu, MenuItem, IconButton } from '@mui/material';
import styled from 'styled-components';
import Icon from '../Icons/Icons';
import { alpha } from '@mui/material/styles';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import theme from '../../theme';

interface IDropdownMenuProps {
    value?: string;
    id?: string;
}

const StyledIconButton = styled(IconButton)`
    &&{
        border: 1px solid #DEDEED;
        color: #343434;
        font-size: 1rem;
        padding: 0.625rem 1rem;
        border-radius: 0.375rem;
        min-width: 11.25rem;
        justify-content: flex-start;
        text-align: left;
                    
        >p {
            margin-right: 0.5rem;
            display: inline-block;
            width: 100%;
            line-height: 1.15;
        }
    }
`;

const StyledMenuItem = styled(MenuItem)`
    &&{
        font-size: 14px;
        color: #444;
        margin-top: 0.25rem;
    }
`;

const StyledMenu = styled(Menu)`
  && .MuiPaper-root {
    border-radius: 6px;
    margin-top: 0.25rem;
    min-width: 180px;
    color: ${(props) => props.theme.palette.grey[300]};
    box-shadow: rgb(255, 255, 255) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
      rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
      rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

    && .MuiMenu-list {
      padding: 4px 0;
    }

    /* && .MuiMenuItem-root {
      && .MuiSvgIcon-root {
        font-size: 18px;
        color: ${(props) => props.theme.palette.text.secondary};
        margin-right: ${(props) => props.theme.spacing * 1.5}px
      }

      &&:active {
        background-color: ${(props) =>
        alpha(
            props.theme.palette.primary.main,
            props.theme.palette.action.selectedOpacity
        )};
      }
    } */
  }
`;


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
