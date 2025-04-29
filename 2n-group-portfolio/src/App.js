import React, { useState } from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Banner from './components/Banner';
import Info from './components/Info';
import Companies from './components/Companies';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';
import Brands from './components/BrandsAndStores';
import AboutUs from './components/AboutUsDetailed';
import Navbar from './components/Navbar';
// Create a theme instance with the new color palette
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#ffffff',
      dark: '#000000',
    },
    secondary: {
      main: '#ffffff',
      light: '#000000',
      dark: '#ffffff',
    },
    text: {
      primary: '#E2E2B6',
      secondary: '#ffffff',
    },
    background: {
      default: '#000000',
      paper: '#000000',
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
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#ffffff',
            color: '#000000',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#000000',
          color: '#ffffff',
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
          <Navbar />
          <Box sx={{ pt: 8 }}>
            <Banner />
            <Info />
            <Companies/>
            <Brands/>
            <AboutUs/>
          </Box>
          <Footer />
        </Box>
      )}
    </ThemeProvider>
  );
}

export default App; 