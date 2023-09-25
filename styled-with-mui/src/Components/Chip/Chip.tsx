import React from 'react';
import { ChipWrapper } from './style';

interface KChip {
    label?: React.ReactNode;
    type?: string;
}


export const KBChip = ({ type, label }: KChip) => {
    return <ChipWrapper type={type} label={label} />;
};