import React from 'react';
import { StyledChip } from './style';

interface KChip {
    label?: React.ReactNode;
    bgColor?: string;
    color?: 'success' | 'warning' | 'info' | 'error' | 'primary';
    rounded?: boolean;
    fontWeight?: string;
    impact: string;
}

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
