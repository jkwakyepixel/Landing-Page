import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e56a0', // Deep professional SaaS royal blue
      dark: '#16427d',
      light: '#e8f0fe',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d97706', // Warm amber accent
      light: '#fef3c7',
    },
    text: {
      primary: '#0f172a', // Deep slate / near black
      secondary: '#475569', // Slate grey
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    divider: 'rgba(0, 0, 0, 0.06)',
  },
  typography: {
    fontFamily: [
      '"Plus Jakarta Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.035em',
      lineHeight: 1.15,
      color: '#0f172a',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      color: '#0f172a',
    },
    h6: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.65,
      color: '#475569',
    },
    body2: {
      fontSize: '0.925rem',
      lineHeight: 1.5,
      color: '#64748b',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: '10px 22px',
          fontSize: '0.95rem',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          backgroundColor: '#1e56a0',
          boxShadow: '0 4px 14px 0 rgba(30, 86, 160, 0.35)',
          '&:hover': {
            backgroundColor: '#16427d',
            boxShadow: '0 6px 20px 0 rgba(30, 86, 160, 0.45)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: '#e2e8f0',
          color: '#1e293b',
          backgroundColor: '#ffffff',
          '&:hover': {
            borderColor: '#cbd5e1',
            backgroundColor: '#f8fafc',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
