import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import { KBChip } from '../Chip/Chip';

const meta = {
    title: 'Atoms/Chips',
    component: KBChip,
    tags: ['autodocs'],
} satisfies Meta<typeof KBChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                impact='Default Chip'
                color='primary'
            />
        </ThemeProvider>
    );
};

export const Success = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                impact='High Impact'
            />
        </ThemeProvider>
    );
};

export const Warning = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                impact='Medium Impact'
            />
        </ThemeProvider>
    );
};

export const Low = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                impact='Low Impact'
            />
        </ThemeProvider>
    );
};
