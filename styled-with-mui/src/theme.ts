import { createTheme } from '@material-ui/core/styles';

const customTheme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#0B93DF', 
      dark: '#343434',
    },
    secondary: {
      main: '#DEDEED', 
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
    h1: {
      fontSize: '2.375rem',
      fontWeight: 'bold',
      lineHeight: 1.19,
      color: '#343434',
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
    h2: {
      fontSize: '2rem', //32rem
      fontWeight: 'bold',
      lineHeight: 1.14,
      color: '#343434',
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
    h3: {
      fontSize: '1.5rem', //24pxx
      fontWeight: 500,
      lineHeight: 1.14,
      color: '#343434',
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
    h4: {
      fontSize: '1.25rem', //20px
      fontWeight: 500,
      lineHeight: 1.14,
      color: '#343434',
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
    h5: {
      fontSize: '1rem', //16px
      fontWeight: 700,
      lineHeight: 1.14,
      color: '#343434',
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`, // (Bootstrap strategy)
  overrides: {
    MuiContainer: {
        root: {
          maxWidth: '1200px', // Set your desired width here
        },
    },
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

export default customTheme;
