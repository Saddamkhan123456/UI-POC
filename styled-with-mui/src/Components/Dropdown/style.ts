import { Menu, MenuItem, IconButton } from '@mui/material';
import styled from 'styled-components';
import { alpha } from '@mui/material/styles';

export const StyledIconButton = styled(IconButton)`
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

export const StyledMenuItem = styled(MenuItem)`
    &&{
        font-size: 14px;
        color: #444;
        margin-top: 0.25rem;
    }
`;

export const StyledMenu = styled(Menu)`
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
