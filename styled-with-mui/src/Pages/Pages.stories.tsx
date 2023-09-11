import { ThemeProvider } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material";
import { ThemeProvider as ScThemeProvider } from "styled-components";
import theme from './../theme';
import { Meta } from "@storybook/react";
import { HomePage } from "./Home";
import { BrowserRouter } from "react-router-dom";
import { RecommendedPage } from "./RecommendedList";
// import { TechDigestDetailPage } from "./TechDigestDetails";



const meta = {
    title: 'Pages/Pages',
    component: HomePage,
    tags: ['autodocs'],
} satisfies Meta<typeof HomePage>;

export default meta;

export const Home = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ScThemeProvider theme={theme}>
                    <BrowserRouter>
                        <HomePage />
                    </BrowserRouter>
                </ScThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export const Recommended = () => {
    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
                <ScThemeProvider theme={theme}>
                    <BrowserRouter>
                        <RecommendedPage />
                    </BrowserRouter>
                </ScThemeProvider>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};


// export const TechDigestDetail = () => {
//     return (
//         <StyledEngineProvider injectFirst>
//             <ThemeProvider theme={theme}>
//                 <ScThemeProvider theme={theme}>
//                     <BrowserRouter>
//                         <TechDigestDetailPage />
//                     </BrowserRouter>
//                 </ScThemeProvider>
//             </ThemeProvider>
//         </StyledEngineProvider>
//     );
// };