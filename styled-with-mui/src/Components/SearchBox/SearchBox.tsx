import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Button, FormControl, TextField } from '@mui/material';
import Icon from '../Icons/Icons';

interface SearchProps {
  className?: string;
  id: string;
  labelText: string;
  onlySearchIcon?: boolean;
  value?: string;
  focus?: boolean;
}

const KbSearchBox = styled(FormControl)(({ theme }) => ({
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

export const SearchBox = ({ className, id, labelText, onlySearchIcon, value, focus }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState<string>(value ? value : '');

  return (
    <form>
      <KbSearchBox className={className}>
        <TextField
          fullWidth
          id={id}
          label={labelText}
          size='small'
          variant='outlined'
          value={searchQuery}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
          autoFocus={focus}
        />
        <Button size='small' variant='contained' disableElevation={true} className='searchBtn' type='submit'>
          {onlySearchIcon ? <Icon kind='search' size={24} /> : 'Search'}
        </Button>
      </KbSearchBox>
    </form>
  );
};
