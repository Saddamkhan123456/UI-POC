import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

interface KChip {
    label?: React.ReactNode;
    bgColor?: string;
    color?: 'success' | 'warning' | 'info' | 'error' | 'primary';
    rounded?: boolean;
    fontWeight?: string;
    impact: string;
}

const StyledChip = styled(Chip)(({ theme }) => ({
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


export const KBChip = ({ impact, color = 'success' }: KChip) => {
    return (
        <div>
            <StyledChip label={impact} color={
                impact === 'High Impact' || impact === 'high impact' ? 'success' :
                    impact === 'Medium Impact' || impact === 'medium impact' ? 'warning' :
                        impact === 'Low Impact' || impact === 'low impact' ? 'error' :
                            color
            } />
        </div>
    );
};
