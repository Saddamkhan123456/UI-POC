import { AppBar, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


export const KbHeader = styled(AppBar)(() => ({
    paddingBlock: '1.644rem',
    paddingRight: '3.12rem',
    paddingLeft: '1.87rem',
    boxShadow: 'none',
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

export const KbLogo = styled(Box)(() => ({
        display: 'flex',
        alignItems: 'center',
}));

export const HeaderWrapper = styled(Box)(() => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',

        '& .nav-breadcrumb': {
            marginLeft: '3.25rem',
        }
}));