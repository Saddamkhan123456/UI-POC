import type { Meta } from '@storybook/react';
import { StyledButton } from './ButtonStyled';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme';

const meta = {
    title: 'Components/Button',
    component: StyledButton,
    tags: ['autodocs'],
} satisfies Meta<typeof StyledButton>;

export default meta;

export const BasicButtonStyled = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <h1>h1 element</h1>
                <StyledButton>Demo</StyledButton>
            </ThemeProvider>
        </>
    );
};