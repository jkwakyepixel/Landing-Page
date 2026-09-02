import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import theme from './theme/theme';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import RolesSection from './components/RolesSection';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#ffffff',
          color: 'text.primary',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <NavigationBar />
        <HeroSection />
        <RolesSection />
      </Box>
    </ThemeProvider>
  );
}

export default App;
