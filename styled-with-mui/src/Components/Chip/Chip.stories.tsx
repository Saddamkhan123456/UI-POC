import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import { KBChip } from './Chip';

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
                label='Default Chip'
                type='info'
            />
        </ThemeProvider>
    );
};

export const Success = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                label='High Impact'
                type='success'
            />
        </ThemeProvider>
    );
};

export const Warning = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                label='Medium Impact'
                type='warning'
            />
        </ThemeProvider>
    );
};

export const Low = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBChip
                label='Low Impact'
                type='error'
            />
        </ThemeProvider>
    );
};
