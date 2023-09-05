import { Header } from '../Molecules/Header/Header';
import { ThemeProvider } from "@mui/material/styles";
import { Box, StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import theme from '../theme';
import { Banner } from '../Molecules/Banner/Banner';
import { SearchList } from '../Molecules/SearchResultList/SearchResultList';


interface RecommendedProps {
    isSearch?: boolean;
    isBreadcrumb?: boolean;

}

export const RecommendedPage = ({ }: RecommendedProps) => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ScThemeProvider theme={theme}>
                    <Box sx={{ background: '#F8F8F8' }}>
                        <Header isBreadcrumb isSearch />
                        <SearchList />
                    </Box>

                </ScThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
