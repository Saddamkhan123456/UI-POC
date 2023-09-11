import { styled } from "@mui/material/styles";
import { Breadcrumbs } from "@mui/material";
import theme from '../../theme';



export const KNavBreadcrumb = styled(Breadcrumbs)(({ theme }) => ({
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

export const KBreadcrumb = styled(Breadcrumbs)(({ theme }) => ({
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