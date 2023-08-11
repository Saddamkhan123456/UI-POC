import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';
import Breadcrumb from './Breadcrumb';

const meta = {
    title: 'Atoms/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <Breadcrumb />
        </ThemeProvider>
    );
};