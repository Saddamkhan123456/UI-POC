import type { Meta } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../../theme';
import CustomMenu from './Dropdown';


const meta = {
    title: 'Atoms/Dropdown',
    component: CustomMenu,
    tags: ['autodocs'],
} satisfies Meta<typeof CustomMenu>;

export default meta;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <CustomMenu value='Categories' />
        </ThemeProvider>
    );
};