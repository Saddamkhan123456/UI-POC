import { Header } from '../Molecules/Header/Header';
import { ThemeProvider } from "@mui/material/styles";
import { Box, StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import theme from '../theme';
import { SearchList } from '../Molecules/SearchResultList/SearchResultList';


export const RecommendedPage = () => {
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
