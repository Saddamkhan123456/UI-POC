import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#0B93DF', 
    },
    secondary: {
      main: '#898989', 
    },
    warning: {
      main: '#F0AD56',
    },
    success: {
      main: '#10B857',
    },
    info: {
      main: '#4556AF',
    },
    common: {
      white: '#fff',
    },
  },
    typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
  },
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
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
