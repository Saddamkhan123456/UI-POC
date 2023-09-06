import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { APP_PAGES } from './Utils/Constants';
import '../src/App.css';
import HomePage from './Pages/Home-page/HomePage';
import Bookmarked from './Pages/Bookmarked/Bookmarked';

const App = () => (
  <Router>
    <Routes>
      <Route path={APP_PAGES.HOME_PAGE} element={<HomePage />} />
      <Route path={APP_PAGES.BOOKMARKED} element={<Bookmarked />} />
    </Routes>
  </Router>
);

export default App;
