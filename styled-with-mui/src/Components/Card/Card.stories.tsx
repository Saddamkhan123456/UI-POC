import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import theme from '../../theme';
import { BookmarkCard } from './BookmarkCard';
import dummyImage from '../../Assets/Images/blogImg.jpg';
import dummyImage2 from '../../Assets/Images/dummy2.jpg';
import { MadeForYouCard } from './MadeForYouCard';
import { BrowserRouter } from 'react-router-dom';


const meta = {
    title: 'Atoms/Cards',
    component: BookmarkCard,
    tags: ['autodocs'],
} satisfies Meta<typeof BookmarkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardBookmark = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ScThemeProvider theme={theme}>
                    <BookmarkCard
                        heading="How To Start Automation Issue With Cypress Quickly?"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                        image={dummyImage}
                    />
                </ScThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export const MadeForYou = () => {
    return (
        <BrowserRouter>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={theme}>
                    <ScThemeProvider theme={theme}>
                        <MadeForYouCard
                            link='/'
                            title="Recently Uploaded"
                            alt="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                            src={dummyImage2}
                        />
                    </ScThemeProvider>
                </ThemeProvider>
            </StyledEngineProvider>
        </BrowserRouter>
    );
};
