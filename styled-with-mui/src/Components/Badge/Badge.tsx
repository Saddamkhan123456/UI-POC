import React from 'react';
import Icon from '../Icons/Icons';
import { StyledBadge } from './style';

interface KBadge {
    label?: React.ReactNode;
}

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
