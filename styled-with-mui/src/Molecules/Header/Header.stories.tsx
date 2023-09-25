import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import { Header } from './Header';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider as ScThemeProvider } from "styled-components";
import { StyledEngineProvider } from '@mui/material';


const meta = {
    title: 'Components/App Header',
    component: Header,
    tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ScThemeProvider theme={theme}>
                    <BrowserRouter>
                        <Header />
                    </BrowserRouter>
                </ScThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};