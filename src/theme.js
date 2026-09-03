import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#5C232B',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#2C4A3B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F3EEE7',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2B2320',
      secondary: '#6F6560',
    },
    divider: 'rgba(43, 35, 32, 0.12)',
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 500,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontStyle: 'italic',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
});

export default theme;
