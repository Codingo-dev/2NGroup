import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Companies from './components/Companies';
import Footer from './components/Footer';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#0d47a1',
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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          bgcolor: 'background.default',
        }}
      >
        <main>
          <Banner />
          <AboutUs />
          <Companies />
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App; 