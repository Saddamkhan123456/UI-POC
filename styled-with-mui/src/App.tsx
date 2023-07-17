import React from 'react';
import logo from './logo.svg';
import './App.css';

// import { StyledButton } from './Button/ButtonStyled';  
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <h1>h1 element</h1>
        {/* <StyledButton>Styled Button</StyledButton> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
