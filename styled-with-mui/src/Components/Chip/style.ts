import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';


export const StyledChip = styled(Chip)(({ theme }) => ({
    padding: '0.25rem 0.625rem',
    borderRadius: '0.25rem',
    textTransform: 'uppercase',
    fontFamily: '"Ubuntu", sans-serif',
    fontSize: '0.75rem',
    height: 'auto',
    color: '#fff',
    "& .MuiChip-label": {
        padding: '0',
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
