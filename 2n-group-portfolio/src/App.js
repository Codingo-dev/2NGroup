import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Companies from './components/Companies';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Brands from './components/BrandsAndStores';

// Create a theme instance with the new color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#03346E',
      light: '#6EACDA',
      dark: '#021526',
    },
    secondary: {
      main: '#6EACDA',
      light: '#03346E',
      dark: '#021526',
    },
    text: {
      primary: '#E2E2B6',
      secondary: '#6EACDA',
    },
    background: {
      default: '#021526',
      paper: '#03346E',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    allVariants: {
      color: '#E2E2B6',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#E2E2B6',
          '&:hover': {
            backgroundColor: '#6EACDA',
            color: '#021526',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#03346E',
          color: '#E2E2B6',
        },
      },
    },
  },
});

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : (
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            minHeight: '100vh',
            bgcolor: 'background.default',
            color: 'text.primary',
          }}
        >
          <main>
            <Banner />
            <AboutUs />
            <Companies/>
            <Brands/>
          </main>
          <Footer />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App; 