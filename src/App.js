import React from 'react';
import { ThemeProvider, createTheme, Box } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Banner from './components/Banner';
import AboutUs from './components/AboutUs';
import Companies from './components/Companies';
import BrandsAndStores from './components/BrandsAndStores';
import AboutUsDetailed from './components/AboutUsDetailed';
import Footer from './components/Footer';
import Navbar from '../2n-group-portfolio/src/components/Navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#03346E',
    },
    secondary: {
      main: '#6EACDA',
    },
    background: {
      default: '#021526',
    },
    text: {
      primary: '#E2E2B6',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box sx={{ pt: 8 }}>
        <Banner />
        <AboutUs />
        <Companies />
        <BrandsAndStores />
        <AboutUsDetailed />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App; 