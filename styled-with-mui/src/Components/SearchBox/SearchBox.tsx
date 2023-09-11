import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import Icon from '../Icons/Icons';
import { KbSearchBox } from './style';

interface SearchProps {
  className?: string;
  id: string;
  labelText: string;
  onlySearchIcon?: boolean;
  value?: string;
  focus?: boolean;
}

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
