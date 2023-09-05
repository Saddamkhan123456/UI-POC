import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';
import Icon from '../Icons/Icons';

interface KBadge {
    label?: React.ReactNode;
}


const StyledBadge = styled(Chip)(({ theme }) => ({
    padding: '0.56rem 0.75rem 0.56rem 1rem',
    borderRadius: '0.375rem',
    border: '1px solid #DEDEED',
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '11.25rem',
    height: '2.125rem',
    color: '#343434',
    "&.kb-badge": {
        marginRight: theme.spacing(5),
    },
    '& .MuiChip-label': {
        paddingLeft: '0',
    },
    '& .MuiChip-deleteIcon': {
        margin: '0',
    }
}));


export const KBBadge = ({ label }: KBadge) => {
    const handleClick = () => {
        console.info('You clicked the Chip.');
    };

    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };
    return (
        <StyledBadge className='kb-badge' variant="outlined" onClick={handleClick}
            onDelete={handleDelete} label={label} deleteIcon={<Icon kind={'cross'} />} />
    );
};
