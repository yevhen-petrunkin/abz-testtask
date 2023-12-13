import NunitoTTF from '../fonts/Nunito.ttf';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: 'var(--primary)',
      light: 'var(--primary-hover)',
    },
    secondary: {
      main: 'var(--secondary-main)',
      light: 'var(--secondary-light)',
      contrastText: 'var(--secondary-contrast)',
    },
    error: {
      main: 'var(--error)',
    },
    info: {
      main: 'var(--info-main)',
      light: 'var(--info-light)',
    },
  },

  typography: {
    fontFamily: 'Nunito, sans-serif',

    h1: {
      color: 'var(--info-light)',
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
