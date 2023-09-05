import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import { KBBadge } from './Badge';

const meta = {
    title: 'Atoms/Badge',
    component: KBBadge,
    tags: ['autodocs'],
} satisfies Meta<typeof KBBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <KBBadge
                label='Default Chip'

            />
        </ThemeProvider>
    );
};

