import { createTheme } from '@mui/material/styles';

/**
 * Apple Design System Theme for Edukra
 * Principles: Optical sizing, size-specific tracking, refined leading,
 * authentic physical response on press, materials and translucent depth.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0071e3', // Edukra trust blue
      dark: '#0058b0',
      light: '#e8f2fc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f7f6f2', // Warm editorial alabaster canvas
      dark: '#eceae3',
      light: '#ffffff',
      contrastText: '#141416',
    },
    text: {
      primary: '#141416', // Warm obsidian ink (high contrast, softer than #000)
      secondary: '#52525b', // High-contrast muted slate (>= 6:1 on alabaster/white)
    },
    background: {
      default: '#f7f6f2',
      paper: '#ffffff',
    },
    divider: 'rgba(20, 20, 22, 0.08)',
  },
  typography: {
    fontFamily: [
      '"Plus Jakarta Sans"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"SF Pro Text"',
      'system-ui',
      'sans-serif',
    ].join(','),
    // Editorial Display Headings: Bricolage Grotesque with tight negative tracking
    h1: {
      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", system-ui, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.04em',
      lineHeight: 1.03,
      color: '#141416',
    },
    h2: {
      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", system-ui, sans-serif',
      fontWeight: 800,
      letterSpacing: '-0.032em',
      lineHeight: 1.08,
      color: '#141416',
    },
    h3: {
      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.026em',
      lineHeight: 1.15,
      color: '#141416',
    },
    h4: {
      fontFamily: '"Bricolage Grotesque", "Plus Jakarta Sans", system-ui, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.020em',
      lineHeight: 1.22,
      color: '#141416',
    },
    h5: {
      fontWeight: 650,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
      color: '#141416',
    },
    h6: {
      fontWeight: 650,
      letterSpacing: '-0.010em',
      lineHeight: 1.35,
      color: '#141416',
    },
    // Body typography: comfortable leading, crisp optical contrast
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.625,
      letterSpacing: '-0.011em',
      color: '#3f3f46',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.55,
      letterSpacing: '-0.006em',
      color: '#52525b',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '-0.015em',
    },
  },
  shape: {
    borderRadius: 14, // Apple continuous squircle feel
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999, // Iconic Apple pill shape for interactive actions
          padding: '10px 22px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          // Apple tactile response: respond instantly on press
          '&:active': {
            transform: 'scale(0.975)',
            transition: 'transform 80ms cubic-bezier(0.16, 1, 0.3, 1)',
          },
        },
        containedPrimary: {
          backgroundColor: '#0071e3',
          color: '#ffffff',
          boxShadow: '0 2px 8px 0 rgba(0, 113, 227, 0.28)',
          '&:hover': {
            backgroundColor: '#0077ed',
            boxShadow: '0 4px 16px 0 rgba(0, 113, 227, 0.38)',
            transform: 'translateY(-1px)',
          },
        },
        outlined: {
          borderColor: 'rgba(0, 0, 0, 0.12)',
          color: '#1d1d1f',
          backgroundColor: 'transparent',
          '&:hover': {
            borderColor: 'rgba(0, 0, 0, 0.24)',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
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
