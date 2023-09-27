import { styled } from "@mui/material/styles";
import { Chip } from "@mui/material";
import theme from '../../theme';


export const StyledBadge = styled(Chip)(() => ({
    padding: '0.56rem 0.75rem 0.56rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #DEDEED',
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '11.25rem',
    height: '2.125rem',
    color: '#343434',
    marginRight: theme.spacing(5),
    '& .MuiChip-label': {
        paddingLeft: '0',
    },
    '& .MuiChip-deleteIcon': {
        margin: '0',
    }
}));