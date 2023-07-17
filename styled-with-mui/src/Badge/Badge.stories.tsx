import type { Meta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { ChipStyled } from './Badge';

const meta = {
    title: 'Components/Chip',
    component: ChipStyled,
    tags: ['autodocs'],
} satisfies Meta<typeof ChipStyled>;

export default meta;

export const BasicButtonStyled = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <h1>h1 element</h1>
                <ChipStyled label="Chip"></ChipStyled>
            </ThemeProvider>
        </>
    );
};