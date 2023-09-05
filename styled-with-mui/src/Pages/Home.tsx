import { Header } from '../Molecules/Header/Header';
import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import theme from './../theme';
import { MadeForYou } from '../Molecules/MadeForYou/MadeForYou';
import { Bookmarked } from '../Molecules/Bookmarked/Bookmarked';
import { Catagories } from '../Molecules/Catagories/Catagories';
import { Banner } from '../Molecules/Banner/Banner';
import Carousel from '../Molecules/TechDigestSlider/TechDigestSlider';
import { techDigestData } from '../Molecules/TechDigestSlider/data';





interface HomePageProps {
    isSearch?: boolean;
    isBreadcrumb?: boolean;

}

export const HomePage = ({ }: HomePageProps) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ScThemeProvider theme={theme}>
                    <Header />
                    <Banner isTitle />
                    <Catagories />
                    <Carousel techData={techDigestData} />
                    <Bookmarked />
                    <MadeForYou />
                </ScThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
