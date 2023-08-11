import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import Dropdown from './Dropdown';
import CustomMenu from './dropdownTwo';


const meta = {
    title: 'Atoms/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <ThemeProvider theme={theme}>
            <Dropdown value={'category'} />
        </ThemeProvider>
    );
};

export const Dropdown2 = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <CustomMenu />
            </ThemeProvider>

        </>
    )
}