import NunitoTTF from '../fonts/Nunito.ttf';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f4e041',
      light: '#ffe302',
    },
    secondary: {
      main: '#7e7e7e',
      light: '#b4b4b4',
      dark: 'rgba(0, 0, 0, 0.87)',
      contrastText: '#d0cfcf',
    },
    error: {
      main: '#cb3d40',
    },
    info: {
      main: '#00bdd3',
    },

    alternate: {
      main: '#ffffff',
      vague: 'rgba(255, 255, 255, 0.87)',
    },
  },

  typography: {
    fontFamily: 'Nunito, sans-serif',

    h1: {
      fontWeight: 'var(--default-weight)',
      fontSize: 'var(--special-size)',
      lineHeight: 'var(--special-lheight)',
    },

    h2: {
      fontWeight: 'var(--default-weight)',
      fontSize: 'var(--special-size)',
      lineHeight: 'var(--special-lheight)',
    },

    body1: {
      fontWeight: 'var(--default-weight)',
      fontSize: '1rem',
      lineHeight: 'var(--default-lheight)',
    },

    button: {
      fontWeight: 'var(--default-weight)',
      fontSize: '1rem',
      lineHeight: 'var(--default-lheight)',
      textTransform: 'none',
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'Nunito';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Nunito'), local('Nunito-Regular'), url(${NunitoTTF}) format('ttf');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
  },
});
