import './App.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';
import { Routes, Route } from "react-router-dom";
import { APP_PAGES } from './Utils/constants';
import { HomePage } from './Pages/Home';
import { RecommendedPage } from './Pages/RecommendedList';


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path={APP_PAGES.SEARCH} element={<HomePage />} />
          <Route path={APP_PAGES.RECOMMEND} element={<RecommendedPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
