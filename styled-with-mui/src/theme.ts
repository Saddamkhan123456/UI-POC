import { createTheme } from '@material-ui/core/styles';
import React from 'react';



const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#0B93DF', 
    },
    secondary: {
      main: '#00ff00', // Example secondary color
    },
    warning: {
      main: '#F0AD56',
    },
    success: {
      main: '#10B857',
    }
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'red',
        color: 'white',
        '&:hover': {
          backgroundColor: 'blue',
        },
      },
    },
  },
});

export default theme;
