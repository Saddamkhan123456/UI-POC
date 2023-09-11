
import { styled } from '@mui/material/styles';
import { FormControl } from '@mui/material';

export const KbSearchBox = styled(FormControl)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  '& .MuiInputBase-root': {
    borderRadius: '0.25rem 0 0 0.25rem',
    border: '1px solid',
    borderColor: theme.palette.secondary.main,
    '&:hover': {
      borderColor: theme.palette.secondary.main,
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '0.875rem',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(14px, -9px) scale(0.85)',
  },
  '& .searchBtn': {
    background: theme.palette.primary.main,
    textTransform: 'capitalize',
    borderRadius: '0 0.25rem 0.25rem 0',
    fontSize: '1.25rem',
    fontWeight: 400,
    padding: '0.125rem 1.563rem',
    minWidth: 'auto',
  },
}));