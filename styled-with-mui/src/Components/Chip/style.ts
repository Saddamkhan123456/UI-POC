import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';
import Theme from '../../theme';


export const StyledChip = styled(Chip)(({ theme }) => ({
    padding: '0.25rem 0.625rem',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    fontFamily: Theme.typography.fontFamily,
    fontSize: '0.75rem',
    height: 'auto',
    color: '#fff',
    "& .MuiChip-label": {
        padding: '0',
        fontFamily: Theme.typography.fontFamily,
    },
    "&.MuiChip-color": {
        "&Warning": {
            background: '#F0AD56',
        },
        "&Success": {
            background: '#10B857',
        }
    }
}));

export const ChipWrapper = styled(Chip)<{ type?: string, label?: React.ReactNode }>(({ type }) => ({
    display: 'inline-block',
    padding: '4px 8px',
    borderRadius: '4px',
    fontSize: '14px',
    height: 'auto',
    textAlign: 'center',
    color: 'white',
    backgroundColor: type === 'success'
        ? Theme.palette.success.main
        : type === 'warning'
            ? Theme.palette.warning.main
            : type === 'error'
                ? Theme.palette.error.main
                : 'gray', // Default background color
    "& .MuiChip-label": {
        padding: '0',
        fontFamily: Theme.typography.fontFamily,
    },
}));