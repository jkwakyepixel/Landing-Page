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
      main: '#0071e3', // Apple signature vibrant blue
      dark: '#0058b0',
      light: '#e8f2fc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f5f5f7', // Apple warm neutral gray
      dark: '#e5e5ea',
      light: '#ffffff',
      contrastText: '#1d1d1f',
    },
    text: {
      primary: '#1d1d1f', // Apple deep near-black (softer than #000, high contrast)
      secondary: '#6e6e73', // Apple classic secondary typography gray
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    divider: 'rgba(0, 0, 0, 0.06)',
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"SF Pro Display"',
      '"SF Pro Text"',
      '"Plus Jakarta Sans"',
      '"Inter"',
      'system-ui',
      'sans-serif',
    ].join(','),
    // Apple typography: negative tracking on large text, tight leading
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.038em',
      lineHeight: 1.06,
      color: '#1d1d1f',
    },
    h2: {
      fontWeight: 750,
      letterSpacing: '-0.030em',
      lineHeight: 1.12,
      color: '#1d1d1f',
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.025em',
      lineHeight: 1.18,
      color: '#1d1d1f',
    },
    h4: {
      fontWeight: 700,
      letterSpacing: '-0.020em',
      lineHeight: 1.24,
      color: '#1d1d1f',
    },
    h5: {
      fontWeight: 650,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
      color: '#1d1d1f',
    },
    h6: {
      fontWeight: 650,
      letterSpacing: '-0.010em',
      lineHeight: 1.35,
      color: '#1d1d1f',
    },
    // Body typography: comfortable leading, optical kerning near 0
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.625,
      letterSpacing: '-0.011em',
      color: '#424245',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.55,
      letterSpacing: '-0.006em',
      color: '#6e6e73',
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
