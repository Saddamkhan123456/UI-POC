import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import { APP_PAGES } from './Utils/Constants';

const App = () => (
  <Router>
    <Routes>
      <Route path={APP_PAGES.HOME_PAGE} element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
