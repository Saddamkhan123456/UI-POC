import React from 'react';
import Chip from '@mui/material/Chip';
import { styled } from '@mui/system';

interface KBadge {
    label?: React.ReactNode;
    bgColor?: string;
    color?: 'success' | 'warning' | 'info' | 'error' | 'primary';
    rounded?: boolean;
    fontWeight?: string;
    impact: string;
}

const StyledChip = styled(Chip)`
  padding: 0.25rem 0.625rem;
  border-radius: 0.25rem;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  font-size: 0.75rem;
  height: auto;
`;

export const KBChip = ({ label, impact, bgColor = 'dark', color = 'success', rounded, fontWeight }: KBadge) => {
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
