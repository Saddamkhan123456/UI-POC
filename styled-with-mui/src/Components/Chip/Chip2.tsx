import React from 'react';
import { BadgeWrapper } from './style';

interface KChip {
    label?: React.ReactNode;
    type?: string;
}

export const Badge = ({ type, label }: KChip) => {
    return <BadgeWrapper type={type} label={label} />;
};
